/**
 * Mips assembler constructor
 */
function mipsAssembler() {
    var MipsAssembler = {
        debug: false,
        /**
        * Given a mipsLine and named arguments, return its machine code representation
        */

        assembleMipsLine: function(line, namedArgs) {
            var name = line.instruction;
            var formatType = instructionNameToFormatType(name);
            var opcode = instructionNameToOpcode(name);
            var result = opcode;

            var rsOverrides = ["LUI", "SLL", "SRL"];
            var rtOverrides = ["JR"];
            var rdOverrides = ["JR"];

            var nameInRsOverrides = rsOverrides.indexOf(name) != -1;
            var nameInRtOverrides = rtOverrides.indexOf(name) != -1;
            var nameInRdOverrides = rdOverrides.indexOf(name) != -1;

            if (nameInRsOverrides) {
                result += " " + "00000";
            } else if ("$rs" in namedArgs) {
                result += " " + regToBinary(namedArgs["$rs"]);
            }

            if (nameInRtOverrides) {
                result += " " + "00000";
            } else if ("$rt" in namedArgs) {
                result += " " + regToBinary(namedArgs["$rt"]);
            }

            if (nameInRdOverrides) {
                result += " " + "00000";
            } else if ("$rd" in namedArgs) {
                result += " " + regToBinary(namedArgs["$rd"]);
            }

            if ("shamt" in namedArgs) {
                result += " " + MIPS.numberToBinaryString(namedArgs["shamt"], 5);
            } else if (formatType == "R") {
                result += " " + "00000";
            }

            var funct = instructionNameToFunctionCode(name);
            if (funct) {
                result += " " + funct;
            }

            if ("imm" in namedArgs) {
                result += " " + MIPS.numberToBinaryString(namedArgs["imm"], 16);
            }

            if ("label" in namedArgs) {
                result += " " + namedArgs["label"];
            }

            result += " " + formatType;

            //if(debug) {console.log("in mips_assembler line 61 result: ", result);}

            return result;
        }
    };

    /*** Private ***/
    function instructionNameToFormatType(name) {
        var defaultFormat = "UNKNOWN";

        var nameFormatMap = {
            "ADD"   :   "R",
            "ADDI"  :   "I",
            "ADDU"  :   "R",
            "ADDIU" :   "I",
            "SUB"   :   "R",
            "SUBU"  :   "R",
            "LUI"   :   "I",

            // Logical
            "AND"   :   "R",
            "ANDI"  :   "I",
            "NOR"   :   "R",
            "OR"    :   "R",
            "ORI"   :   "I",
            "SLL"   :   "R",
            "SRL"   :   "R",

            // Branch and Jump
            "BEQ"   :   "I",
            "BNE"   :   "I",
            "J"     :   "J",
            "JAL"   :   "J",
            "JR"    :   "R",

            // Memory Access
            "LW"    :   "I",
            "SW"    :   "I",
            "LH"    :   "I",
            "LHU"   :   "I",
            "SH"    :   "I",
            "LB"    :   "I",
            "LBU"   :   "I",
            "SB"    :   "I",

            // Comparison
            "SLT"   :   "R",
            "SLTI"  :   "I",
            "SLTU"  :   "R",
            "SLTIU" :   "I",

            "SYSCALL" : "SYSCALL"
        };

        return nameFormatMap[name] || defaultFormat;
    };

    function instructionNameToOpcode(name) {
        var defaultOpcode = "000000";

        var nameOpcodeMap = {
            "J"     : "000010", // 2
            "JAL"   : "000011", // 3,
            "BEQ"   : "000100", // 4,
            "BNE"   : "000101", // 5,
            "ADDI"  : "001000", // 8,
            "ADDIU" : "001001", // 9,
            "SLTI"  : "001010", // 10,
            "SLTIU" : "001011", // 11,
            "ANDI"  : "001100", // 12,
            "ORI"   : "001101", // 13,
            "LUI"   : "001111", // 15,
            "LB"    : "100000", // 32,
            "LH"    : "100001", // 33,
            "LW"    : "100011", // 35,
            "LBU"   : "100100", // 36,
            "LHU"   : "100101", // 37,
            "SB"    : "101000", // 40,
            "SH"    : "101001", // 41,
            "SW"    : "101011", // 43

            "SYSCALL" : "syscall"
        };

        return nameOpcodeMap[name] || defaultOpcode;
    };

    function instructionNameToFunctionCode(name) {
        var nameFunctCodeMap = {
            "SLL"  : "000000", //0x00,
            "SRL"  : "000010", //0x02,
            "JR"   : "001000", //0x08,
            "ADD"  : "100000", //0x20,
            "ADDU" : "100001", //0x21,
            "SUB"  : "100010", //0x22,
            "SUBU" : "100011", //0x23,
            "AND"  : "100100", //0x24,
            "OR"   : "100101", //0x25,
            "NOR"  : "100111", //0x27,
            "SLT"  : "101010", //0x2a,
            "SLTU" : "101011"  //0x2b
        };

        return nameFunctCodeMap[name] || null;
    }

    function regToBinary(reg) {
        var defaultRegVal = "";
        var registerIdMap = {
            "$zero" : "00000",
            "$at"   : "00001",
            "$v0"   : "00010",
            "$v1"   : "00011",
            "$a0"   : "00100",
            "$a1"   : "00101",
            "$a2"   : "00110",
            "$a3"   : "00111",
            "$t0"   : "01000",
            "$t1"   : "01001",
            "$t2"   : "01010",
            "$t3"   : "01011",
            "$t4"   : "01100",
            "$t5"   : "01101",
            "$t6"   : "01110",
            "$t7"   : "01111",
            "$s0"   : "10000",
            "$s1"   : "10001",
            "$s2"   : "10010",
            "$s3"   : "10011",
            "$s4"   : "10100",
            "$s5"   : "10101",
            "$s6"   : "10110",
            "$s7"   : "10111",
            "$t8"   : "11000",
            "$t9"   : "11001",
            "$k0"   : "11010",
            "$k1"   : "11011",
            "$gp"   : "11100",
            "$sp"   : "11101",
            "$fp"   : "11110",
            "$ra"   : "11111"
        };

        return registerIdMap[reg]
    };
    return MipsAssembler;
}
