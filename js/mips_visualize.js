/*
 * Mips visualizer constructor
 */



function visualize () {
    console.log("Well now we are in visualize");
    $("#vis").append(
        //' <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Launch demo modal </button>' +

        '<!-- MODAL DEFINITION BEGINS  DO NOT CHANGE FOLLOWING LINES -->' +
        '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> ' +
        '<div class="modal-dialog" role="document" style="width:740px;"> ' +
        '<div class="modal-content"> ' +
        '<div class="modal-header"> ' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> ' +
        '<h4 class="modal-title" id="myModalLabel">MIPS Processor</h4> ' +
        '</div> ' +
        '<div class="modal-body" style="height:550px;" >' +
        '<!-- MODAL DEFINITION END -->' +

        '<svg id="processor" style="width:640px;height:510px;">' +
        '<g id="start"> ' +
        '<g id="IF">' +
        '<!-- START ### IF ###--> ' +
        '<!-- PC RECT --> ' +
        '<rect id="pc" class="ifetchObj" x="35" y="240" width="25" height="70" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></rect>' +
        '<text class="ifetch" id="2" x="38" y="280" fill="lightgrey" font-size="12px"  >PC</text>' +

        '<!-- LINE PC TO INSTRUCTION MEMORY -->' +
        '<line id="pcToInstMem" class="ifetchObj" x1="60" y1="275" x2="71" y2="275" stroke="lightgrey" stroke-width="2px"></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="ifetchObj" d="M 71,275 71,273 75,275 71,277 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- CIRCLE -->' +
        '<circle class="ifetchObj" id="4" cx="66" cy="275"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></circle>' +

        '<!-- LINE PC TO ADD TOP -->' +
        '<path id="pcAluIn" class="ifetchObj" d="M 105,55 66,55 66,275" style="fill:none;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<!-- Arrow point end of line-->' +
        '<path class="ifetchObj" d="M 105,55 105,53 109,55 105,57 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<g>' +
        '<!-- 4 TO ADD BOTTOM-->' +
        '<line id="fourAluIn" class="ifetchObj" x1="90" y1="120" x2="105" y2="120" style="stroke:lightgrey;stroke-width:2px;"></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="ifetchObj" d="M 105,120 105,118 109,120 105,122 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<text class="ifetch" id="10" x="80" y="123" fill="lightgrey" font-size="11px"  >4</text>' +
        '</g>' +

        '<!-- INSTRUCTION MEMORY RECT-->' +
        '<g id="instMem">' +
        '<rect class="ifetchObj" id="10" x="80" y="260" width="65" height="90" style="fill:none;stroke:lightgrey;stroke-width:2px;"></rect>' +
        '<text class="ifetch" id="11" x="84" y="272" fill="lightgrey" font-size="9px" >Read</text>' +
        '<text class="ifetch" id="12" x="84" y="284" fill="lightgrey" font-size="9px" >address</text>' +
        '<text class="ifetch" id="13" x="90" y="304" fill="lightgrey" font-size="9px" >Instruction</text>' +
        '<text class="ifetch" id="14" x="114" y="316" fill="lightgrey" font-size="9px" >[31-0]</text>' +
        '<text class="ifetch" id="15" x="88" y="336" fill="lightgrey" font-size="9px" >Instruction</text>' +
        '<text class="ifetch" id="16" x="92" y="346" fill="lightgrey"  font-size="9px" >memory</text>' +
        '</g>' +

        '<!-- PC ADD ALU-->' +
        '<g id="pcAlu" transform="translate(110,40)">' +
        '<path class="ifetchObj" id="17" d="M -17.27 20.05 L 20.82 20.05" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,1.77,20.05)" pointer-events="none"></path>' +
        '<path class="ifetchObj" id="18" d="M -17.27 81.95 L 20.82 81.95" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,1.77,81.95)" pointer-events="none"></path>' +
        '<path class="ifetchObj" id="19" d="M 6.85 49.81 L 61.61 49.81" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,34.23,49.81)" pointer-events="none"></path>' +
        '<path class="ifetchObj" id="20" d="M 2 1.33 L 34.5 22.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
        '<path class="ifetchObj" id="21" d="M 2 101.33 L 34.5 77.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
        '<path class="ifetchObj" id="22" d="M 2 63 L 5.64 51" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
        '<path class="ifetchObj" id="23" d="M 5.64 51 L 2 38.83" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
        '</g>' +
        '<text class="ifetch" id="25" x="120" y="95" fill="lightgrey" font-size="11px" >Add</text>' +
        '<!-- END ### IF ###-->' +
        '</g>' +

        '<!-- START ### ID ###-->' +
        '<g id="ID">' +
        '<g id="instLines">' +
        '<!-- Instruction [31-26] INSTRUCTION DISTRIBUTION LINE-->' +
        '<text id="26" class="idecode" x="158" y="185" font-size="9px" fill="lightgrey"  >Instruction [31-26]</text>' +
        '<line id="inst31ToCtrl"class="idecodeObj" x1="158" y1=190 x2="226" y2="190" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path  class="idecodeObj"  d="M 226,190 226,188 230,190 226,192 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- Instruction [25-21] INSTRUCTION DISTRIBUTION LINE-->' +
        '<text class="idecode" x="162" y="255" font-size="9px" fill="lightgrey" >Instruction [25-21]</text>' +
        '<line  id="instToRR1" class="idecodeObj" x1="158" y1=260 x2="259" y2="260" stroke="lightgrey" stroke-width="2px"></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 259,260 259,258 263,260 259,262 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<circle class="idecodeObj" cx="158" cy="260"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

        '<!-- Instruction [20-16] INSTRUCTION DISTRIBUTION LINE-->' +
        '<text class="idecode" x="162" y="287" font-size="9px" fill="lightgrey" >Instruction [20-16]</text>' +
        '<line id="inst20ToRR2" class="idecodeObj" x1="158" y1=292 x2="259" y2="292" stroke="lightgrey" stroke-width="2px"></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 259,292 259,290 263,292 259,294 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<circle class="idecodeObj" cx="158" cy="292"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></circle>' +

        '<!-- Instruction [20-16] INSTRUCTION DISTRIBUTION LINE BRANCHES TO MUX  -->' +
        '<path id="inst20ToMux" class="idecodeObj" d="M  233,310 213,310 213,292" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 228,310 228,308 232,310 228,312 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<circle class="idecodeObj" cx="213" cy="292"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

        '<!-- Instruction [15-11] INSTRUCTION DISTRIBUTION LINE-->' +
        '<text class="idecode" x="162" y="340" font-size="9px" fill="lightgrey" >Instruction [15-11]</text>' +
        '<line id="inst15ToMux" class="idecodeObj" x1="158" y1=345 x2="228" y2="345" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 228,345 228,343 232,345 228,347 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<circle class="idecodeObj" cx="158" cy="345"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

        '<!-- INST MEM RECT TO  DIST LINE-->' +
        '<line class="idecodeObj" x1="145" y1=300 x2="158" y2="300"  stroke="lightgrey" stroke-width="2px" ></line>' +
        '<circle class="idecodeObj" cx="158" cy=300  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

        '<!-- VERTICAL INSTRUCTION DISTRIBUTION LINE-->' +
        '<line class="idecodeObj" x1="158" y1=412 x2="158" y2="190" style="stroke:lightgrey;stroke-width:2px;" ></line>' +

        '<!-- Instruction [15-0] INSTRUCTION DISTRIBUTION LINE-->' +
        '<text class="idecode" x="162" y="407" font-size="9px" fill="lightgrey" >Instruction [15-0]</text>' +
        '<line id="inst15ToSignExt" class="idecodeObj" x1="158" y1=412 x2="285" y2="412" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 285,412 285,410 289,412 285,414 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- 16 DIAG LINE 32 DIAG LINE AT SIGN EXTEND-->' +
        '<text class="idecode" x="273" y="402" font-size="11px" fill="lightgrey" >16</text>' +
        '<line class="idecodeObj" x1="273" y1=405 x2="283" y2="418" style="stroke:lightgrey;stroke-width:2px;" ></line>' +
        '<text class="idecode" x="343" y="402" font-size="11px" fill="lightgrey" >32</text>' +
        '<line class="idecodeObj" x1="343" y1=405 x2="353" y2="418" style="stroke:lightgrey;stroke-width:2px;" ></line>' +

        '<!-- Instruction [5-0] INSTRUCTION DISTRIBUTION LINE TO ALU CONTROL-->' +
        '<text class="idecode" x="275" y="460" font-size="9px" fill="lightgrey" >Instruction [5-0]</text>' +
        '<path id="inst5ToAluCtrl" class="idecodeObj" d="M 386,420 372,420 372,465 268,465 268,412" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 380,420 380,418 384,420 380,422 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<circle class="idecodeObj" cx="268" cy="412"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
        '</g>' +

        '<!-- REGISTER MUX -->' +
        '   <g id="registerMux" transform="translate(235,300)">' +
        '<path class="idecodeObj" d="M 2.92 17 L 23.08 17 C 31.87 17 39 21.92 39 28 C 39 34.08 31.87 39 23.08 39 L 2.92 39 C -5.87 39 -13 34.08 -13 28 C -13 21.92 -5.87 17 2.92 17 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,13,28)" pointer-events="none"></path>' +
        '<path class="idecodeObj" d="M 2 28 L 2 28" fill="none" stroke="red" stroke-miterlimit="10" pointer-events="none"></path>' +
        '</g>' +
        '<text class="idecode" x="245" y="313" font-size="10px" fill="lightgrey" >0</text>' +
        '<text class="idecode" x="243" y="325" font-size="10px" fill="lightgrey" >M</text>' +
        '<text class="idecode" x="244" y="333" font-size="10px" fill="lightgrey" >u</text>' +
        '<text class="idecode" x="244" y="341" font-size="10px" fill="lightgrey" >x</text>' +
        '<text class="idecode" x="245" y="351" font-size="10px" fill="lightgrey" >1</text>' +

        '<!-- LINE REGISTER MUX TO REGISTER FILE -->' +
        '<line class="idecodeObj" x1="260" y1=327 x2="264" y2="327" stroke="lightgrey" stroke-width="2px"></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 264,327 264,325 268,327 264,329 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- CONTROL ELLIPSE -->' +
        '<ellipse id="controlEllipse" class="idecodeObj, idtorq" cx="260" cy="190" rx="55" ry="25" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,260,190)" ></ellipse>' +
        '<text class="idtorq" x="240" y="195" font-size="11px" fill="lightgrey" >Control</text>' +

        '<!-- CONTROL ELLIPSE TO INSTRUCTION MUX -->' +
        '<path id="regDistToInstMux" class="idecodeObj, idtorq" d="M 273,144 295,144 295,125 150,125 150,368 248,368 248,355" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<text class="idtorq" x="300" y="140" font-size="9px" fill="lightgrey" >RegDst</text>' +

        '<!-- CONTROL ELLIPSE TO OR GATE -->' +
        '<path class="idecodeObj, idtorq" d="M 482,153 455,153 455,165 283,165" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<text class="idtorq" x="290" y="160" font-size="9px" fill="lightgrey" >Brach</text>' +

        '<!-- CONTROL ELLIPSE TO DATA MEMORY -->' +
        '<text class="idecode, idtorq" x="290" y="177" font-size="9px" fill="lightgrey" >MemRead</text>' +
        '<path class="idecodeObj, idtorq" d="M 540,400 540,430 625,430 625,180 283,180" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- CONTROL ELLIPSE TO DATA MEMORY MUX -->' +
        '<text class="idecode, idtorq" x="290" y="192" font-size="9px" fill="lightgrey" >MemtoReg</text>' +
        '<path class="idecodeObj, idtorq" d="M 593,311 593,195 283,195" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- CONTROL ELLIPSE TO ALUOP -->' +
        '<text class="idecode, idtorq" x="290" y="205" font-size="9px" fill="lightgrey" >ALUOp</text>' +
        '<path class="idecodeObj, idtorq" d="M 411,444 411,472 367,472 367,207 283,207" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- CONTROL ELLIPSE TO MEMWRITE -->' +
        '<text class="idecode, idtorq" x="290" y="217" font-size="9px" fill="lightgrey" >MemWrite</text>' +
        '<path class="idecodeObj, idtorq" d="M 535,290 535,220 280,220" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- CONTROL ELLIPSE TO ALUSRC -->' +
        '<text class="idecode, idtorq" x="290" y="231" font-size="9px" fill="lightgrey" >ALUSrc</text>' +
        '<path class="idecodeObj, idtorq" d="M 398,320 398,234 274,234" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- CONTROL ELLIPSE TO REGWRITE -->' +
        '<text class="idecode, idtorq" x="315" y="245" font-size="9px" fill="lightgrey" >RegWrite</text>' +
        '<path class="idecodeObj, idtorq" d="M 305,250 305,245 263,245" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

        '<!-- REGISTER FILE RECT-->' +
        '<rect class="idecodeObj" x="270" y="250" width="85" height="120" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></rect>' +
        '<text class="idecode" x="276" y="261" font-size="10px" fill="lightgrey" >RR1</text>' +
        '<!--text class="idecode" x="276" y="276" font-size="10px" fill="lightgrey" >Read register 1</text-->' +

        '<text class="idecode" x="322" y="276" font-size="10px" fill="lightgrey" >RD1</text>' +
        '<!--text class="idecode" x="322" y="296" font-size="10px" fill="lightgrey" >Read data 1</text-->' +

        '<text class="idecode" x="276" y="296" font-size="10px" fill="lightgrey" >RR2</text>' +
        '<!--text class="idecode" x="276" y="306" font-size="10px" fill="lightgrey" >Read register 2</text-->' +

        '<text class="idecode" x="322" y="324" font-size="10px" fill="lightgrey" >RD2</text>' +
        '<!--text class="idecode" x="322" y="334" font-size="10px" fill="lightgrey" >Read data 2</text-->' +

        '<text class="idecode" x="276" y="326" font-size="10px" fill="lightgrey" >WR</text>' +
        '<!--text class="idecode" x="276" y="336" font-size="10px" fill="lightgrey" >Write register</text-->' +
        '<text class="idecode" x="276" y="354" font-size="10px" fill="lightgrey" >WD</text>' +
        '<!--text class="idecode" x="276" y="364" font-size="10px" fill="lightgrey" >Write data</text-->' +

        '<text class="idecode" x="306" y="366" font-size="11px" fill="lightgrey" >Registers</text>' +

        '<!-- LINE READ DATA 1 TO ALU RESULT -->' +
        '<line class="idecodeObj" x1="355" y1=285 x2="413" y2="285" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 413,285 413,283 417,285 413,287 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- LINE READ DATA 2 TO MUX ALU RESULT -->' +
        '<line class="idecodeObj" x1="355" y1=325 x2="377" y2="325" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 377,325 377,323 381,325 377,327 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- SIGN-EXTED ELLIPSE-->' +
        '<text class="idecode" x="299" y="407" font-size="11px" fill="lightgrey" >Sign-</text>' +
        '<text class="idecode" x="299" y="420" font-size="11px" fill="lightgrey" >extend</text>' +
        '<ellipse class="idecodeObj" cx="315" cy="410" rx="30" ry="20" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,315,410)" ></ellipse>s' +

        '<!-- REGISTER FILE READ DATA2 TO MEMORY WRITE DATA JUNCTION-->' +
        '<circle class="idecodeObj" cx="362" cy=325  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

        '<!-- LINE SIGN-EXTED ELLIPSE TO SHIFT LEFT 2-->' +
        '<path class="idecodeObj" d="M 375,140 372,140 372,412 335,412" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<line class="idecodeObj" x1="372" y1=140 x2="373" y2="140"  stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 373,140 373,138 377,140 373,142 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- LINE SIGN-EXTED 32 TO SHIFT LEFT 2 ALU MUX JUNCTION-->' +
        '<circle class="idecodeObj" cx="372" cy="350"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
        '<line class="idecodeObj" x1="372" y1=350 x2="377" y2="350" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 377,350 377,348 381,350 377,352 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- LINE ADD ALU TO ALU RESULT -->' +
        '<path id="addAluToMux" class="idecodeObj" d="M 145,90, 345,90 345,57 505,57" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- arrow -->' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 505,57 505,55 509,57 505,59 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- CIRCLE -->' +
        '<circle class="idecodeObj" cx="345" cy="78"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
        '<!-- arrow -->' +
        '<line class="idecodeObj" x1="345" y1="78" x2="417" y2="78" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="idecodeObj" d="M 417,78 417,76 421,78 417,80 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<!-- END ### ID ###-->' +
        '</g>' +


        '<!-- START ### EX ###-->' +
        '<!-- ALU CONTROL ELLIPSE-->' +
        '<ellipse class="excodeObj, extorq" cx="410" cy="415" rx="30" ry="20" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,410,415)" ></ellipse>' +
        '<text class="excode, extorq" x="398" y="410" font-size="11px" fill="lightgrey" >ALU</text>' +
        '<text class="excode, extorq" x="392" y="422" font-size="11px" fill="lightgrey" >control</text>' +
        '<path class="excodeObj, extorq" d="M 445,350 445,415 431,415" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

        '<!-- ALU MUX -->' +
        '<g transform="translate(384,310)">' +
        '<path class="excodeObj" d="M 2.92 17 L 23.08 17 C 31.87 17 39 21.92 39 28 C 39 34.08 31.87 39 23.08 39 L 2.92 39 C -5.87 39 -13 34.08 -13 28 C -13 21.92 -5.87 17 2.92 17 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,13,28)" pointer-events="none"></path>' +
        '<path d="M 2 28 L 2 28" fill="none" stroke="lightgrey" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '</g>' +
        '<line class="excodeObj" x1="408" y1=340 x2="413" y2="340" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="excodeObj" d="M 413,340 413,338 417,340 413,342 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<text class="excode" x="394" y="322" font-size="10px" fill="lightgrey" >0</text>' +
        '<text class="excode" x="392" y="332" font-size="10px" fill="lightgrey" >M</text>' +
        '<text class="excode" x="393" y="340" font-size="10px" fill="lightgrey" >u</text>' +
        '<text class="excode" x="393" y="348" font-size="10px" fill="lightgrey" >x</text>' +
        '<text class="excode" x="394" y="358" font-size="10px" fill="lightgrey" >1</text>' +

        '<!-- ALU CTRL JUMP-->' +
        '<g transform="translate(420,260)">' +
        '<path class="excodeObj" d="M -16.82 20.05 L 21.27 20.05" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,20.05)" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M -16.82 81.95 L 21.27 81.95" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,81.95)" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 26.39 49.81 L 81.15 49.81" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,53.77,49.81)" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 2 1.33 L 53.67 22.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 2 101.33 L 53.67 77.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 2 63 L 8.36 51" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 8.36 51 L 2 38.83" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '</g>' +
        '<text class="excode" x="450" y="290" font-size="10px" fill="lightgrey" >Zero</text>' +
        '<text class="excode" x="430" y="314" font-size="10px" fill="lightgrey" >ALU</text>' +
        '<text class="excode" x="450" y="323" font-size="10px" fill="lightgrey" >ALU</text>' +
        '<text class="excode" x="445" y="333" font-size="10px" fill="lightgrey" >result</text>' +
        '<line class="excodeObj" x1="475" y1=320 x2="491" y2="320"  stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="excodeObj" d="M 491,320 491,318 495,320, 491,322 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- ALU ZERO TO OR -->' +
        '<path class="excodeObj, extorq" d="M 481,169 477,169 480,290 475,290" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

        '<g transform="translate(5,10)">' +
        '<!-- SHIFT LEFT 2 ELLIPSE-->' +
        '<ellipse class="excodeObj" cx="390" cy="130" rx="20" ry="15" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,390,130)" ></ellipse>' +
        '<text class="excode" x="378" y="128" font-size="11px" fill="lightgrey" >Shift</text>' +
        '<text class="excode" x="378" y="138" font-size="11px" fill="lightgrey" >left 2</text>' +
        '</g>' +
        '<line class="excodeObj" x1="410" y1="138" x2="418" y2="138" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="excodeObj" d="M 418,138 418,136 422,138 418,140 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- ALU SHIFT left 2 to PC-->' +
        '<g transform="translate(425,60)">' +
        '<path class="excodeObj" d="M -16.82 20.05 L 21.27 20.05" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,20.05)" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M -16.82 81.95 L 21.27 81.95" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,81.95)" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 26.39 49.81 L 81.15 49.81" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,53.77,49.81)" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 2 1.33 L 53.67 22.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 2 101.33 L 53.67 77.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 2 63 L 8.36 51" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '<path class="excodeObj" d="M 8.36 51 L 2 38.83" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '</g>' +
        '<text class="excode" x="435" y="115" font-size="11px" fill="lightgrey" >Add</text>' +
        '<text class="excode" x="450" y="94" font-size="11px" fill="lightgrey" >ALU</text>' +
        '<text class="excode" x="450" y="104" font-size="11px" fill="lightgrey" >result</text>' +

        '<!-- LINE READ DATA 2 TO WRITE DATA -->' +
        '<path class="excodeObj" d="M 495,375 362,375 362,325" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<line class="excode" x1="493" y1=375 x2="493" y2="375" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="excodeObj" d="M 493,375 493,373 497,375 493,377  z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- LINE ALU RESULT TO MUX -->' +
        '<line class="excodeObj" x1="480" y1="110" x2="505" y2="110"  stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="excodeObj" d="M 505,110 505,108 509,110 505,112 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<!-- END ### EX ###-->' +


        '<!-- START ### MEM ###-->' +
        '<!-- DATA MEMORY-->' +
        '<rect class="memcodeObj" x="500" y="290" width="65" height="110" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></rect>' +
        '<text class="memcode" x="503" y="325" font-size="10px" fill="lightgrey" >Address</text>' +
        '<text class="memcode" x="540" y="318" font-size="10px" fill="lightgrey" >Read</text>' +
        '<text class="memcode" x="542" y="328" font-size="10px" fill="lightgrey" >data</text>' +
        '<text class="memcode" x="503" y="370" font-size="10px" fill="lightgrey" >Write</text>' +
        '<text class="memcode" x="503" y="380" font-size="10px" fill="lightgrey" >data</text>' +
        '<text class="memcode" x="538" y="385" font-size="11px" fill="lightgrey" >Data</text>' +
        '<text class="memcode" x="522" y="395" font-size="11px" fill="lightgrey" >memory</text>' +

        '<!-- LINE BETWEEN DATA MEMORY AND WB MUX-->' +
        '<line class="memcodeObj" x1="566" y1=324 x2="575" y2="324" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="memcodeObj" d="M 575,324 575,322 579,324 575,326 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- JUNCTION BETWEEN DATA MEMORY AND WB MUX-->' +
        '<circle class="memcodeObj" cx="484" cy="320"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

        '<!-- LINE ALU RESULT TO WB MUX-->' +
        '<path class="memcodeObj" d="M 575,350 572,350 572,415 484,415 484,320" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<line class="memcode" x1="575" y1=350 x2="575" y2="350" stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="memcodeObj" d="M 575,350 575,348 579,350 575,352 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!-- ALU RESULT MUX -->' +
        '<g transform="translate(510,50)">' + '' +
        '<path class="memcodeObj" d="M 1.51 23 L 27.49 23 C 38.82 23 48 28.6 48 35.5 C 48 42.4 38.82 48 27.49 48 L 1.51 48 C -9.82 48 -19 42.4 -19 35.5 C -19 28.6 -9.82 23 1.51 23 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,14.5,35.5)" pointer-events="none" ></path>' +
        '</g>' +
        '<text class="memcode" x="522" y="65" font-size="12px" fill="lightgrey" >0</text>' +
        '<text class="memcode" x="520" y="80" font-size="12px" fill="lightgrey" >M</text>' +
        '<text class="memcode" x="521" y="90" font-size="12px" fill="lightgrey" >u</text>' +
        '<text class="memcode" x="521" y="100" font-size="12px" fill="lightgrey" >x</text>' +
        '<text class="memcode" x="522" y="114" font-size="12px" fill="lightgrey" >1</text>' +

        '<!-- OR -->' +
        '<!-- this is the 1st gen and gate -->' +
        '<!--g transform="translate(480,15)">' + '' +
        '<path class="memcodeObj, memtorq" d="M 1 133.5 C 1 132.84 1.11 132.2 1.3 131.73 C 1.49 131.26 1.75 131 2.02 131 L 17.08 131 C 19.47 133.69 21 139.55 21 146 C 21 152.45 19.47 158.31 17.08 161 L 2.02 161 C 1.75 161 1.49 160.74 1.3 160.27 C 1.11 159.8 1 159.16 1 158.5 L 1 133.5 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
        '</g-->' +
        '<path class="memcodeObj, memtorq" d="M  525,119 525,160 510,160" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

        '<!--text class="memcode, memtorq" x="483" y="164" font-size="10px" fill="lightgrey" >Jump</text-->' +
        '<text class="memcode, memtorq" x="530" y="164" font-size="10px" fill="lightgrey" >PCSrc</text>' +

        '<g transform="translate(479,144)">' +
        '<path class="memcodeObj, memtorq"d="M 2 4.5 C 2 3.84 2.16 3.2 2.45 2.73 C 2.73 2.26 3.12 2 3.53 2 L 26.12 2 C 29.7 4.69 32 10.55 32 17 C 32 23.45 29.7 29.31 26.12 32 L 3.53 32 C 3.12 32 2.73 31.74 2.45 31.27 C 2.16 30.8 2 30.16 2 29.5 L 2 4.5 Z" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"/>' +
        '</g>' +
        '<!-- arrow -->' +
        '<!--line class="memcode, memtorq" x1="525" y1="130" x2="525" y2="127" stroke="lightgrey" stroke-width="2px"></line-->' +
        '<!-- Arrow point end of line-->' +
        '<!--path class="memcodeObj"  d="M 525,127 523,127 525,123 527,127 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path-->' +

        '<!-- LINE ALU RESULT MUX TO PC -->' +
        '<path class="memcodeObj"  d="M 25,275 22,275 22,23 545,23 545,84 536,84" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<!-- arrow -->' +
        '<line class="memcode"  x1="23" y1="275" x2="26" y2="275" stroke-width="2px"></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="memcodeObj" d="M 26,275 26,273 30,275 26,277 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<!-- END ### MEM ###-->' +


        '<!-- START ### WB ###-->' +
        '<!-- MEMORY MUX -->' +
        '<g transform="translate(580,310)">' +
        '<path class="wbcodeObj" d="M 2.92 17 L 23.08 17 C 31.87 17 39 21.92 39 28 C 39 34.08 31.87 39 23.08 39 L 2.92 39 C -5.87 39 -13 34.08 -13 28 C -13 21.92 -5.87 17 2.92 17 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,13,28)" pointer-events="none" ></path>' +
        '<path class="wbcodeObj" d="M 2 28 L 2 28" fill="none" stroke="lightgrey" stroke-miterlimit="10" pointer-events="none" ></path>' +
        '</g>' +
        '<text class="wbcode" x="590" y="325" font-size="10px" fill="lightgrey" >1</text>' +
        '<text class="wbcode" x="588" y="335" font-size="10px" fill="lightgrey" >M</text>' +
        '<text class="wbcode" x="589" y="343" font-size="10px" fill="lightgrey" >u</text>' +
        '<text class="wbcode" x="589" y="351" font-size="10px" fill="lightgrey" >x</text>' +
        '<text class="wbcode" x="590" y="361" font-size="10px" fill="lightgrey" >0</text>' +

        '<!-- LINE MEMORY MUX TO REGISTER WRITE DATA  -->' +
        '<path class="wbcodeObj" d="M 265,360 256,360 256,476 614,476 614,340 603,340" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
        '<line class="wbcode" x1="262" y1=360 x2="262" y2="360"  stroke="lightgrey" stroke-width="2px" ></line>' +
        '<!-- Arrow point end of line-->' +
        '<path class="wbcodeObj" d="M 262,360 262,358 266,360 262,362 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
        '<!-- END ### WB ###-->' +

        '<!-- START TIMING LINES ### TM ### -->' +
        '<!--line class="timing" id="iftime" x1="25" y1="490" x2="145" y2="490" stroke="lightgrey" stroke-width="10px"></line-->' +
        '<!--line class="timing" id="idtime" x1="147" y1="490" x2="365" y2="490" stroke="lightgrey" stroke-width="10px"></line-->' +

        '<!-- CREDIT AUTHOR FOR DIAGRAM -->' +
        '<text class="ifetch" x="15" y="505" font-size="9px" >' +
        'Figure 5.17: Patterson, D. and Hennessy, J. Computer Organization and Design. 3rd ed. Morgan Kaufmann, 2005. 307-14. Print. Reprinted with permission.' +
        '</text>' +

        '<div id="mainLine" align="center">' +
        '</div>' +

        '</g>' +

        '</svg>' +


        '<!-- MODAL DEFINITION BEGINS DO NOT CHANGE FOLLOWING LINES -->' +
        '</div class="button-margin"> ' +
        '<div id="modal-buttons" class="modal-footer" style="text-align:center;"> ' +
        '<!--button type="button"  data-dismiss="modal">Close</button--> ' +
        '<!--button id="step" type="button">Step</button--> ' +
        '</div> ' +
        '</div> ' +
        '</div> ' +
        '</div>' +
        '<!-- MODAL DEFINITION END -->' +
        '<!--script>' +
        'var aniData = d3.selectAll(".ifetch");' +
        'console.log(aniData[0][2]);' +
        '</script-->'
    );

    //TODO: grey out visualize button if instruction does not work.
    //TODO: Rivoire sent the control imputs for mux
    // TODO: All created items need a specific class, remove all items in the class!
    //TODO: Need to break setTorq out into text and object classes.


    var iftoggle = 0;
    var idtoggle = 0;
    var extoggle = 0;
    var memtoggle = 0;
    var wbtoggle = 0;
    var done;
    var dataKeys = ["PLAY", "IF", "ID", "EX", "MEM", "WB", "RESTART", "Close"];
    var debug = false;
    var pc = 32768;
    var previousLine = 0;

    var allRegs = [
        '$zero', '$at', '$v0', '$v1', '$a0', '$a1', '$a2', '$a3',
        '$t0',   '$t1', '$t2', '$t3', '$t4', '$t5', '$t6', '$t7',
        '$s0',   '$s1', '$s2', '$s3', '$s4', '$s5', '$s6', '$s7',
        '$t8',   '$t9', '$k0', '$k1', '$gp', '$sp', '$fp', '$ra'
    ];


    /**
     * Hash table of registers : lineValues
     * @property registers: lineValues
     * @type {Object}
     */
    var mipsValues = {};
    /**
     * Array of all registers
     * @property allRegs
     * @type {Array}
     */
    // change svg elements id tags to match the items in elements
    var elements = [
        'pc', 'pcAluIn', 'inst31ToCtrl', 'instToRR1', 'inst20ToRR2',
        'inst20ToMux', 'inst15ToMux', 'inst15ToSignExt', 'inst5ToAluCtrl',
        'regDst', 'jump', 'branch', 'memRead', 'memToReg', 'aluOp0',
        'aluOp1', 'memWrite', 'aluSrc', 'regWrite', 'RR1', 'RR2', 'WR',
        'WD', 'RD1', 'RD2', 'signExt32'
    ];


    //This should be a one time initialize function
    // use a done global toggle to determine it done once?
    // create initialization function and include.

    if (MIPS.numberToBinaryString((CurrentLine["lineNo"]), 8) != previousLine) {
        for (var i = 0; i < elements.length; i++) {
            mipsValues[elements[i]] = setElementValues(elements[i], i);
            console.log("lineValues: ", mipsValues[elements[i]]);
        }
    }


    // sets the element values
    function setElementValues(lineName, lineNumber) {
        /**
         * @class element
         * contains element information.
         */
        return {
            /**
             * element value
             * @property
             * @type {String}
             */
            // calls a function that sets the values on all lines.
            val: getElementData(lineName, lineNumber),
            /**
             * element X Y coordinate value
             * @property
             * @type {Array}
             */
            coordinates: getXYcoordinates(lineName),
            /**
             * The element stage ID, IF, etc.
             * @type {String}
             */
            stage: getStage(lineName)

        };
    } // end function setElementValues(lineName, lineNumber)


    // gets the x and y coordinates for the element values
    function getXYcoordinates(lineName) {
        var defaultFormat = [0, 0];

        var coordinates = {

            //IF elements
            "pc": [30, 365],
            "pcAluIn": [25, 50],

            //ID elements
            "inst31ToCtrl": [170, 201],
            "instToRR1": [170, 270],
            "inst20ToRR2": [170, 302],
            "inst15ToMux": [170, 355],
            "inst15ToSignExt": [162, 424],
            "inst5ToAluCtrl": [275, 474],
            "RR1": [276, 270],
            "RR2": [276, 306],
            "WR": [276, 336],
            "WD": [276, 364],
            "RD1": [35, 378],
            "RD2": [35, 391],
            "regDst": [239, 364],
            "jump": [210, 50],
            "branch": [485, 156],
            "memRead": [530, 409],
            "memToReg": [584, 310],
            "aluOp0": [420, 452],
            "aluOp1": [425, 452],
            "memWrite": [525, 286],
            "aluSrc": [389, 309],
            "regWrite": [307, 245],
            "signExt32": [10, 417]
        };

        return coordinates[lineName] || defaultFormat;
    } // end function getXYcoordinates(lineName)


    // gets the stage identification
    function getStage(lineName) {
        var defaultFormat = "NA";

        switch (lineName) {

            // IF elements
            case "pc":
            case "pcAluIn":
                return "IF";
                break;

            //ID elements
            case "inst31ToCtrl":
            case "instToRR1":
            case "inst20ToRR2":
            case "inst15ToMux":
            case "inst15ToSignExt":
            case "inst5ToAluCtrl":
            case "RR1":
            case "RR2":
            case "WD" :
            case "WR" :
            case "RD1":
            case "RD2":
            case "regDst":
            case "jump":
            case "branch":
            case "memRead":
            case "memToReg":
            case "aluOp0":
            case "aluOp1":
            case "memWrite":
            case "aluSrc":
            case "regWrite":
            case "signExt32":
                return "ID";
                break;
            default:
                return defaultFormat;
                console.log("getStage something went horribly wrong");
        }

    } // end function getStage(lineName)


    // TODO Attempt to destroy the modal not working FIX ME!
    $("#myModal").on("hide", function (e) {
        if (yourConditionNotToCloseMet) {
            e.preventDefault();
        }
    });


    // display the element values by stage
    function displayElementValues(datapoint, stageClass) {
        // update only lines relevant to this instruction type and specific inst
        if (debug) {
            console.log("displayLineValues datapoint is :", datapoint);
            console.log("displayLineValues stageClass is :", stageClass);
        }

        //ID inst type first
        switch (datapoint) {

            case "IF":
                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    // perhpas another way similar to append in main?
                    if (anElement.stage == "IF") {
                        console.log("displayElementValues case IF is: ", anElement.stage);
                        //create the html element and append to the IF tag.
                        d3.select("#IF").append("text")
                            .text(anElement.val)
                            .style("font-size", "9px")
                            .attr("class", "ifetch lineValues")
                            .attr("x", anElement.coordinates[0])
                            .attr("y", anElement.coordinates[1]);
                    }
                }
                // lable the PC value below the PC rectangle element
                d3.select("#IF").append("text")
                    .text("PC: ")
                    .style("font-size", "9px")
                    .attr("class", "ifetch")
                    .attr("x", 10)
                    .attr("y", 365);
                d3.select("#IF").append("text")
                    .text("RD1: ")
                    .style("font-size", "9px")
                    .attr("class", "ifetch")
                    .attr("x", 10)
                    .attr("y", 378);
                d3.select("#IF").append("text")
                    .text("RD2: ")
                    .style("font-size", "9px")
                    .attr("class", "ifetch")
                    .attr("x", 10)
                    .attr("y", 391);
                d3.select("#IF").append("text")
                    .text("Sign Extended 32 bit value: ")
                    .style("font-size", "9px")
                    .attr("class", "ifetch")
                    .attr("x", 10)
                    .attr("y", 404);

                break;

            case "ID":

                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    // perhpas another way similar to append in main?
                    if (anElement.stage == "ID") {
                        console.log("displayElementValues case ID is: ", anElement.stage);
                        //create the html element and append to the IF tag.
                        d3.select("#ID").append("text")
                            .text(anElement.val)
                            .style("font-size", "9px")
                            .attr("class", "idecode lineValues")
                            .attr("x", anElement.coordinates[0])
                            .attr("y", anElement.coordinates[1]);
                    }
                }
                greyOutElements();
                break;

            default:
                console.log("displayElementValues: something went horribly wrong");

        }

    }


    function greyOutElements() {
        console.log("Well were in greyOutElements now...");

    }




    // gets the data (values) for element
    function getElementData(lineName, LineNumber) {
        var tempArgs = CurrentLine["args"];

        switch (lineName) {
            case "pc":
                if (debug) {
                    console.log("pc is: ", pcStart);
                }
                // TODO: Add a space each four bits.  Future: Need to detect format Bin, hex, decimal
                return MIPS.numberToBinaryString(pc, 16);

                break;

            case "pcAluIn":
                // TODO: Add a space each four bits.  Future: Need to detect format Bin, hex, decimal
                if (debug) {
                    console.log("pcAluInt is: ", parseInt(0, 2).toString(16));
                }
                return MIPS.numberToBinaryString(pc, 16);
                break;

            case "inst31ToCtrl":
                if (debug) {
                    console.log("inst31ToCtrl: ", CurrentLine["assembledInstruction"].slice(0, 6));
                }
                return CurrentLine["assembledInstruction"].slice(0, 6);
                break;

            case "instToRR1":
                if (debug) {
                    console.log("instToRR1: ", CurrentLine["assembledInstruction"].slice(7, 12));
                }
                return CurrentLine["assembledInstruction"].slice(7, 12);
                break;

            case "inst20ToRR2":
                if (debug) {
                    console.log("inst20ToRR2: ", CurrentLine["assembledInstruction"].slice(13, 18));
                }
                return CurrentLine["assembledInstruction"].slice(13, 18);
                break;

            case "inst20ToMux":
                if (debug) {
                    console.log("inst20ToMux: ", CurrentLine["assembledInstruction"].slice(13, 18));
                }
                return CurrentLine["assembledInstruction"].slice(13, 18);
                break;

            case "inst15ToMux":
                if (debug) {
                    console.log("inst15ToMux: ", CurrentLine["assembledInstruction"].slice(19, 24));
                }
                return CurrentLine["assembledInstruction"].slice(19, 24);
                break;

            case "inst15ToSignExt":
                if (debug) {
                    console.log("inst15ToSignExt: ", CurrentLine["assembledInstruction"].slice(19, -1));
                }
                return CurrentLine["assembledInstruction"].slice(19, -1);
                break;

            case "inst5ToAluCtrl":
                if (debug) {
                    console.log("inst5ToAluCtrl: ", CurrentLine["assembledInstruction"].slice(30, -1));
                }
                return CurrentLine["assembledInstruction"].slice(30, -1);
                break;

            case "regDst":
            case "jump":
            case "branch":
            case "memRead":
            case "memToReg":
            case "aluOp0":
            case "aluOp1":
            case "memWrite":
            case "aluSrc":
            case "regWrite":
                console.log("getElementData: ", lineName);
                return control(lineName);
                break;

            // TODO: Need logic here to set these lines by
            case"RR1":
                console.log("in RR1: ", allRegs [MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(7, 12))]);
                return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(7, 12))];
                break;

            case"RR2":
                console.log("in RR1: ", allRegs [MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))]);
                return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))];
                break;

            case"WR":
                console.log("in WR value of ", elements[9].val);
                if ((mipsValues[elements[9]].val) === "0"){
                    return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))];
                 } else {
                    return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(19, 24))];
                 }
                break;

            case"WD":
                return "?";
                break;

            case"RD1":
                var regValue = allRegisterValues[allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(7, 12))]];
                console.log("RD1 is: ", regValue.val);
                return regValue.val;
                break;

            case"RD2":
                var regValue = allRegisterValues[allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))]];
                console.log("RD2 is: ", regValue.val);
                return regValue.val;
                break;
            case "signExt32":
                //MIPS.unsignedNumberToSignedNumber(number, bits)
                return "?";
                break;

        }
    }





    function control (lineName){
        console.log ("function control opcode: ", MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)));
        if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 0 ) {
            // R format math
            for (var i = 0; i < elements.length; i++) {
                var tempElement = elements[i];

                if (tempElement === lineName) {
                    switch (lineName) {
                        case "regDst":
                        case "aluOp1":
                        case "regWrite":
                            return "1";
                            break;
                        case "jump":
                        case "branch":
                        case "memRead":
                        case "memToReg":
                        case "aluOp0":
                        case "memWrite":
                        case "aluSrc":
                            return "0";
                            break;
                    }
                }
            }
        } else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 35 ) {
            // LW instruction
            for (var i = 0; i < elements.length; i++) {
                var tempElement = elements[i];

                if (tempElement === lineName) {
                    switch (lineName) {
                        case "memRead":
                        case "memToReg":
                        case "aluSrc":
                        case "regWrite":
                            return "1";
                            break;
                        case "jump":
                        case "branch":
                        case "aluOp0":
                        case "regDst":
                        case "aluOp1":
                        case "memWrite":

                            return "0";
                            break;
                    }
                }
            }
        }
        else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 43 ) {
            // SW instruction
            for (var i = 0; i < elements.length; i++) {
                var tempElement = elements[i];

                if (tempElement === lineName) {
                    switch (tempElement) {
                        case "memWrite":
                        case "aluSrc":
                            return "1";
                            break;
                        case "jump":
                        case "branch":
                        case "memRead":
                        case "memToReg":
                        case "aluOp0":
                        case "regDst":
                        case "aluOp1":
                        case "regWrite":
                            return "0";
                            break;
                    }
                }
            }
        }
        else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 4 ) {
            // BEQ instruction
            for (var i = 0; i < elements.length; i++) {
                var tempElement = elements[i];

                if (tempElement === lineName) {
                    switch (tempElement) {
                        case "branch":
                        case "aluOp1":
                            return tempElement.val = 1;
                            break;
                        case "jump":
                        case "memRead":
                        case "memToReg":
                        case "aluOp0":
                        case "regDst":
                        case "regWrite":
                        case "memWrite":
                        case "aluSrc":
                            return tempElement.val = 0;
                            break;
                        default:
                            console.log("Control op 4: something went horribly wrong");
                    }
                }
            }
        }
        else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) == 2 ) {
            // J instruction
            for (var i = 0; i < elements.length; i++) {
                var tempElement = elements[i];

                if (tempElement === lineName) {
                    switch (tempElement) {
                        case "branch":
                        case "aluOp1":
                            return tempElement.val = 1;
                            break;
                        case "jump":
                        case "memRead":
                        case "memToReg":
                        case "aluOp0":
                        case "regDst":
                        case "regWrite":
                        case "memWrite":
                        case "aluSrc":
                            return tempElement.val = 0;
                            break;
                        default:
                            console.log("Control op 2: something went horribly wrong");
                    }
                }
            }
        }else {
            console.log("Invalid OpCode")
        }
    }



    var temp = CurrentLine["args"];

    console.log("this is CurrentLine.args[0]: ", temp[0]);
    console.log("is registers global? ", allRegisterValues[temp[0]]);
    //console.log("getting at args: ", CurrentLine["args"]);

    //console.log ("mipsValues array is :", mipsValues );




    // Print to console the complete line from mips_emulator.js: mipsCode.code[currentLine-1]
    if (true) {
        opCode = CurrentLine["assembledInstruction"].slice(0,6);
        console.log("the value of CurrentLine in visual_mips.html is :", CurrentLine);
        console.log("CurrentLine.assembledInstruction in visual_mips.html is :", CurrentLine["assembledInstruction"]);
        console.log("This is the opCode: ", opCode);
    }




    // THIS IS INSTRUCTION TEXT, INSTRUCTION FORMAT AND BINARY INSTRUCT PRINTED AT TOP.
    instructionFormat = CurrentLine["assembledInstruction"].slice(-1);
    var instructionIn = CurrentLine["text"];



    d3.select("#start").append("text")
        .text("Instruction: " + instructionIn)
        .style("font-size", "14px")
        .attr("id", "displayInstructionText")
        .attr("x", 20)
        .attr("y", 11);

        d3.select("#start").append("text")
            .text("Format: " + instructionFormat)
            .style("font-size", "12px")
            .attr("id", "displayInstructionFormat")
            .attr("x", 285)
            .attr("y", 11);


        d3.select("#start").append("text")
            .text("Binary: " + CurrentLine["assembledInstruction"].slice(0,-1))
            .style("font-size", "12px")
            .attr("id", "displayInstructionBinary")
            .attr("x", 365)
            .attr("y", 11);




    // previously used to select the body element and append a div for the buttons
    // now using the modal footer for the buttons.
    /*d3.select("body").append("div")
        .style("text-align", "center")
        .attr("id", "forButton");*/

    // Create the pipeline stage buttons & uses data from dataKeys to name the buttons

    if (!initialized) {

        d3.select("#modal-buttons").selectAll("button.teams").data(dataKeys).enter()
            .append("button")
            /*.attr("class", "btn btn-primary btn-xs")*/
            .attr("text-align", "center")
            .on("click", buttonClick)
            .html(function (d) {
                return d
            });
        initialized = true;
    }

    function setBlack (someClass){
        done =  (d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1500)
            .style("fill", "black")
        +

        d3.selectAll(someClass + "Obj")
            .transition()
            .style('opacity', 1)
            .duration(1500)
            .style("stroke", "black"));
        return done
    }

    function setGrey (someClass){
        done =  (d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1500)
            .style("fill", "lightgrey")
        +
        d3.selectAll(someClass + "Obj")
            .transition()
            .style('opacity', 1)
            .duration(1500)
            .style("stroke", "lightgrey"));
        return done
    }

    //TODO: Need to break setTorq out into text and object classes.
    function setTorq (someClass){
        done = d3.selectAll(someClass)
            .style("stroke", "lightgrey")
            .transition()
            .style('opacity', 1)
            .duration(1500)
            .style("stroke", "turquoise")
            .style("fill", "none");
        return done
    }

    function setTorqGrey (someClass){
        done = d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1500)
            .style("stroke", "lightgrey")
            .style("fill", "none");
        return done
    }

    // Toggle each section between color view and light grey view each time a button is clicked
    // or view all as light grey when "RESET" is clicked.  "PLAY" advances each section then resets to grey.
    function buttonClick(datapoint) {
        var stageClass = " ";
        // this function needs to draw each section
        if(datapoint == "IF" && iftoggle == 0) {
            stageClass = ".ifetch";
            iftoggle = iftoggle + 1;
            setBlack(".ifetch");
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint == "IF" && iftoggle == 1){
            iftoggle = iftoggle - 1;
            return setGrey(".ifetch")
        }

        if (datapoint == "ID" && idtoggle == 0) {
            idtoggle = idtoggle + 1;
            setBlack(".idecode");
            setTorq(".idtorq");
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint == "ID" && idtoggle == 1){
            idtoggle = idtoggle - 1;
            return (setGrey(".idecode") + setTorqGrey(".idtorq"));
        }

        if (datapoint == "EX" && extoggle == 0) {
            extoggle = extoggle + 1;
            setBlack(".excode");
            setTorq(".extorq");
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint == "EX" && extoggle == 1){

            extoggle = extoggle - 1;
            return (setGrey(".excode") + setTorqGrey(".extorq"));
        }

        if (datapoint == "MEM" && memtoggle == 0) {
            memtoggle = memtoggle + 1;
            return (setBlack(".memcode") + setTorq(".memtorq"));
        }
        if(datapoint == "MEM" && memtoggle == 1){
            memtoggle = memtoggle - 1;
            return (setGrey(".memcode") + setTorqGrey(".memtorq"));
        }

        if (datapoint == "WB" && wbtoggle == 0) {
            wbtoggle = wbtoggle + 1;
            return (setBlack(".wbcode") + setTorq(".wbtorq"));
        }
        if(datapoint == "WB" && wbtoggle == 1){
            wbtoggle = wbtoggle - 1;
            return (setGrey(".wbcode") + setTorqGrey(".wbtorq"));
        }

        if(datapoint == "RESTART"){
            // change this to function calls as in play.
            done =  (d3.selectAll(".ifetch,.idecode, .excode, .wbcode, .memcode")
                    .transition()
                    .style('opacity', 1)
                    .duration(1500)
                    .style("fill", "lightgrey")
                    //.style("stroke", "lightgrey")
                +
                d3.selectAll(".ifetchObj, .idecodeObj, .excodeObj, .wbcodeObj, .memcodeObj")
                    .transition()
                    .style('opacity', 1)
                    .duration(1500)
                    .style("stroke", "lightgrey")
                +
                d3.selectAll(".idtorq, .wbtorq, .extorq, .memtorq")
                    .transition()
                    .style('opacity', 1)
                    .duration(1500)
                    .style("stroke", "lightgrey")

            );
            iftoggle = 0;
            idtoggle = 0;
            extoggle = 0;
            memtoggle = 0;
            wbtoggle = 0;
            return done;
        }
        if(datapoint == "PLAY"){
            // TODO: match logic of RESET.  This logic is incorrect
            var blackSection = [".ifetch",".idecode", ".excode", ".memcode", ".wbcode"];
            var turqSection = ["iftorq", ".idtorq", ".extorq", ".memtorq", ".wbtorq"];
            var i = 0;

            blackSection.forEach(setGrey);
            turqSection.forEach(setTorqGrey);

            function myLoop () {
                setTimeout(function () {
                    setBlack(blackSection[i]);
                    setTorq(turqSection[i]);
                    i++;
                    if (i < 5) {
                        myLoop();
                    }
                }, 1500)
            }
            myLoop();
            iftoggle = 1;
            idtoggle = 1;
            extoggle = 1;
            memtoggle = 1;
            wbtoggle = 1;
            return done;
        }

        if(datapoint == "Close") {

            d3.select("#displayInstructionText")
                .remove();

            d3.select("#displayInstructionFormat")
                .remove();

            d3.select("#displayInstructionBinary")
                .remove();

            $("#myModal").modal("hide");
        }
    }

    console.log("testing value of elements: ", mipsValues[elements[15]].val);
    console.log("This is the mipsValues: ", mipsValues);
}