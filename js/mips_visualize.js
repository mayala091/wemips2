/*
 * Mips visualize constructor
 */


function visualize () {
    if (debug) {
        console.log("Well now we are in visualize");
    }

    $("#vis").append(

        '<!-- MODAL DEFINITION BEGINS  DO NOT CHANGE FOLLOWING LINES -->' +

        '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="myModalLabel"> ' +
            '<div class="modal-dialog" role="document" > ' +
                '<div class="modal-content"> ' +
                    '<div class="modal-header" style="background-color: black;"> ' +
                        '<div class="row">' +
                            '<div id="title" class="col-md-4" align="left">' +
                                '<h3 class="modal-title" id="myModalLabel" style="margin-left: 40px;color: white;">Visualization of MIPS Instruction: </h3> ' +
                            '</div> ' +

                            '<div id="instruction" class="col-sm-3" style="color:white;" align="left">' +
                            '</div> ' +

                            '<div class="col-md-3" align="right" style="font-weight:bold;">' +
                                '<a href="ProjectReadmeV2.html" target="about_blank" >User Guide</a> | ' +
                            '</div> ' +
                            '<div class="col-xs-2" align="right">' +
                            '<!--button type="button" class="close" data-dismiss="modal" aria-label="Close" align="right"><span aria-hidden="true">&times;</span></button--> ' +
                            '</div> ' +

                        '</div>'+


                    '</div> ' +
                '<div class="modal-body" >' +
        '<!-- MODAL DEFINITION END -->' +

                                '<style>' +
                                    'li  {' +
                                        'list-style: none;' +
                                        'margin:2px 0 2px 0;' +
                                        'font-size: 13px;' +
                                    '}' +

                                '</style>' +

                                //'<svg id="processor" style="width:640px;height:560px;">' +
                                '<svg class="col-md-8" id="processor" height="70%" width="60%" viewBox="0 0 700 560" preserveAspectRatio="none">' +

                                '<g id="start"> ' +
                                '<g id="IF">' +
                                '<!-- START ### IF ###--> ' +
                                '<!-- PC RECT --> ' +
                                '<rect id="PC" class="ifetchObj" x="35" y="240" width="25" height="70" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></rect>' +
                                '<text id="pcTxt" class="ifetch" x="38" y="280" fill="lightgrey" font-size="12px"  >PC</text>' +

                                '<!-- LINE PC TO INSTRUCTION MEMORY -->' +
                                '<line id="pcToInstMem" class="ifetchObj" x1="60" y1="275" x2="71" y2="275" stroke="lightgrey" stroke-width="2px"></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="pcArrow" class="ifetchObj" d="M 71,275 71,273 75,275 71,277 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- CIRCLE -->' +
                                '<circle id="pcCircle" class="ifetchObj" cx="66" cy="275"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></circle>' +

                                '<!-- LINE PC TO ADD TOP -->' +
                                '<path id="pcAluIn" class="ifetchObj" d="M 105,55 66,55 66,275" style="fill:none;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="pcAddArrow" class="ifetchObj" d="M 105,55 105,53 109,55 105,57 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<g>' +
                                '<!-- 4 TO ADD BOTTOM-->' +
                                '<line id="fourAluIn" class="ifetchObj" x1="90" y1="120" x2="105" y2="120" style="stroke:lightgrey;stroke-width:2px;"></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="fourAluArrow" class="ifetchObj" d="M 105,120 105,118 109,120 105,122 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<text id="fourTxt" class="ifetch" x="80" y="123" fill="lightgrey" font-size="11px"  >4</text>' +
                                '</g>' +

                                '<!-- INSTRUCTION MEMORY RECT-->' +
                                '<g id="instMem">' +
                                '<rect id="instMemRect" class="ifetchObj" x="80" y="260" width="65" height="90" style="fill:none;stroke:lightgrey;stroke-width:2px;"></rect>' +
                                '<text id="instMemTxtRead" class="ifetch" x="84" y="272" fill="lightgrey" font-size="9px" >Read</text>' +
                                '<text id="instMemTxtAddress" class="ifetch" x="84" y="284" fill="lightgrey" font-size="9px" >address</text>' +
                                '<text id="instMemTxtInst" class="ifetch" x="90" y="304" fill="lightgrey" font-size="9px" >Instruction</text>' +
                                '<text id="instMemTxt31" class="ifetch" x="114" y="316" fill="lightgrey" font-size="9px" >[31-0]</text>' +
                                '<text id="instMemTxtIns31" class="ifetch" x="88" y="336" fill="lightgrey" font-size="9px" >Instruction</text>' +
                                '<text id="instMemTxtMem" class="ifetch" x="92" y="346" fill="lightgrey"  font-size="9px" >memory</text>' +
                                '</g>' +

                                '<!-- PC ADD ALU-->' +
                                '<g id="pcAlu" transform="translate(110,40)">' +
                                '<path id="pcAluObj1" class="ifetchObj" d="M -17.27 20.05 L 20.82 20.05" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,1.77,20.05)" pointer-events="none"></path>' +
                                '<path id="pcAluObj2" class="ifetchObj" d="M -17.27 81.95 L 20.82 81.95" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,1.77,81.95)" pointer-events="none"></path>' +
                                '<path id="pcAluObj3" class="ifetchObj" d="M 6.85 49.81 L 61.61 49.81" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,34.23,49.81)" pointer-events="none"></path>' +
                                '<path id="pcAluObj4" class="ifetchObj" d="M 2 1.33 L 34.5 22.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
                                '<path id="pcAluObj5" class="ifetchObj" d="M 2 101.33 L 34.5 77.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
                                '<path id="pcAluObj6" class="ifetchObj" d="M 2 63 L 5.64 51" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
                                '<path id="pcAluObj7" class="ifetchObj" d="M 5.64 51 L 2 38.83" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"></path>' +
                                '</g>' +
                                '<text id="addTxt" class="ifetch" x="120" y="95" fill="lightgrey" font-size="11px" >Add</text>' +

                                '<!-- INST MEM RECT TO  DIST LINE-->' +
                                '<line id="instMemLine" class="ifetchObj" x1="145" y1=300 x2="158" y2="300"  stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<circle id="instMemCircle" class="ifetchObj" cx="158" cy=300  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

                                '<!-- LINE +4 ADD ALU TO SHIFT LEFT 2 ALU RESULT -->' +
                                '<path id="addAluToMux" class="ifetchObj" d="M 145,90, 345,90 345,57 505,57" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="addAluToMuxArrow" class="ifetchObj" d="M 505,57 505,55 509,57 505,59 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- +4 ADD ALU TO SHIFT LEFT 2 ALU TOP IN -->' +
                                '<!-- CIRCLE -->' +
                                '<circle id="fourAluToAluTopCircle" class="ifetchObj" cx="345" cy="78"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
                                '<!-- LINE +4 ADD TO SHIFT LEFT 2 ALU TOP IN-->' +
                                '<line id="fourAluToAluTopLine" class="ifetchObj" x1="345" y1="78" x2="417" y2="78" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="fourAluToAluTopArrow" class="ifetchObj" d="M 417,78 417,76 421,78 417,80 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- END ### IF ###-->' +
                                '</g>' +

                                '<!-- START ### ID ###-->' +
                                '<g id="ID">' +
                                '<g id="instLines">' +
                                '<!-- Instruction [31-26] INSTRUCTION DISTRIBUTION LINE-->' +
                                '<text id="inst31Txt" class="idecode" x="158" y="185" font-size="9px" fill="lightgrey"  >Instruction [31-26]</text>' +
                                '<line id="inst31ToCtrl"class="idecodeObj" x1="158" y1=190 x2="226" y2="190" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="inst31Arrow" class="idecodeObj"  d="M 226,190 226,188 230,190 226,192 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- Instruction [25-21] INSTRUCTION DISTRIBUTION LINE-->' +
                                '<text id="inst25Txt" class="idecode" x="162" y="255" font-size="9px" fill="lightgrey" >Instruction [25-21]</text>' +
                                '<line  id="instToRR1" class="idecodeObj" x1="158" y1=260 x2="259" y2="260" stroke="lightgrey" stroke-width="2px"></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="inst25Arrow" class="idecodeObj" d="M 259,260 259,258 263,260 259,262 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<circle id="inst25Circle" class="idecodeObj" cx="158" cy="260"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

                                '<!-- Instruction [20-16] INSTRUCTION DISTRIBUTION LINE-->' +
                                '<text id="inst20Txt" class="idecode" x="162" y="287" font-size="9px" fill="lightgrey" >Instruction [20-16]</text>' +
                                '<line id="inst20ToCircle" class="idecodeObj" x1="158" y1=292 x2="213" y2="292" stroke="lightgrey" stroke-width="2px"></line>' +
                                '<line id="inst20ToRR2" class="idecodeObj" x1="213" y1=292 x2="259" y2="292" stroke="lightgrey" stroke-width="2px"></line>' +

                                '<!-- Arrow point end of line-->' +
                                '<path id="inst20MUX0Arrow" class="idecodeObj" d="M 259,292 259,290 263,292 259,294 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<circle id= "inst20Circle" class="idecodeObj" cx="158" cy="292"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></circle>' +

                                '<!-- Instruction [20-16] INSTRUCTION DISTRIBUTION LINE BRANCHES TO MUX  -->' +
                                '<path id="inst20ToMux" class="idecodeObj notRObj" d="M  233,310 213,310 213,292" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="inst20MuxArrow" class="idecodeObj notRObj" d="M 228,310 228,308 232,310 228,312 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<circle id="inst20MuxCircle" class="idecodeObj notRObj" cx="213" cy="292"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +

                                '<!-- Instruction [15-11] INSTRUCTION DISTRIBUTION LINE-->' +
                                '<text id= "inst15Txt" class="idecode" x="162" y="340" font-size="9px" fill="lightgrey" >Instruction [15-11]</text>' +
                                '<line id="inst15ToMux" class="idecodeObj" x1="158" y1=345 x2="228" y2="345" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="inst15Arrow" class="idecodeObj" d="M 228,345 228,343 232,345 228,347 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<circle id= "inst15Circle" class="idecodeObj" cx="158" cy="345"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +


                                '<!-- VERTICAL INSTRUCTION DISTRIBUTION LINE-->' +
                                '<line id="instDistLine" class="idecodeObj" x1="158" y1=412 x2="158" y2="190" style="stroke:lightgrey;stroke-width:2px;" ></line>' +

                                '<!-- Instruction [15-0] INSTRUCTION DISTRIBUTION LINE-->' +
                                '<text id="inst15To0Txt" class="idecode" x="162" y="407" font-size="9px" fill="lightgrey" >Instruction [15-0]</text>' +
                                '<line id="inst15ToSignExt" class="idecodeObj" x1="158" y1=412 x2="268" y2="412" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<line " id="intoSignExt16" class="idecodeObj" x1="268" y1=412 x2="285" y2="412" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="intoSignExtArrow16" class="idecodeObj" d="M 285,412 285,410 289,412 285,414 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- 16 DIAG LINE 32 DIAG LINE AT SIGN EXTEND-->' +
                                '<text id="signExt16Txt" class="idecode" x="273" y="402" font-size="11px" fill="lightgrey" >16</text>' +
                                '<line id="signExt16DiagLine" class="idecodeObj" x1="273" y1=405 x2="283" y2="418" style="stroke:lightgrey;stroke-width:2px;" ></line>' +
                                '<text id="signExt32Txt" class="idecode" x="343" y="402" font-size="11px" fill="lightgrey" >32</text>' +
                                '<line id="signExt32DiagLine" class="idecodeObj" x1="343" y1=405 x2="353" y2="418" style="stroke:lightgrey;stroke-width:2px;" ></line>' +

                                '<!-- Instruction [5-0] INSTRUCTION DISTRIBUTION LINE TO ALU CONTROL-->' +
                                '<text id="inst5ToAluCtrlTxt" class="idecode" x="275" y="460" font-size="9px" fill="lightgrey" >Instruction [5-0]</text>' +
                                '<path id="inst5ToAluCtrl" class="idecodeObj" d="M 386,420 372,420 372,465 268,465 268,412" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="inst5ToAluCtrlArrow" class="idecodeObj" d="M 380,420 380,418 384,420 380,422 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<circle id="instToAluCtrlCircle" class="idecodeObj" cx="268" cy="412"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
                                '</g>' +

                                '<!-- REGISTER MUX -->' +
                                '<g id="registerMux" transform="translate(235,300)">' +
                                '<path id="registerMux1" class="idecodeObj" d="M 2.92 17 L 23.08 17 C 31.87 17 39 21.92 39 28 C 39 34.08 31.87 39 23.08 39 L 2.92 39 C -5.87 39 -13 34.08 -13 28 C -13 21.92 -5.87 17 2.92 17 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,13,28)" pointer-events="none"></path>' +
                                '<path id="registerMux2" class="idecodeObj" d="M 2 28 L 2 28" fill="none" stroke="lightgrey" stroke-miterlimit="10" pointer-events="none"></path>' +
                                '</g>' +
                                '<text id="regMuxTxt0" class="idecode" x="245" y="313" font-size="10px" fill="lightgrey" >0</text>' +
                                '<text id="regMuxTxtM" class="idecode" x="243" y="325" font-size="10px" fill="lightgrey" >M</text>' +
                                '<text id="regMuxTxtU" class="idecode" x="244" y="333" font-size="10px" fill="lightgrey" >u</text>' +
                                '<text id="regMuxTxtX" class="idecode" x="244" y="341" font-size="10px" fill="lightgrey" >x</text>' +
                                '<text id="regMuxTxt1" class="idecode" x="245" y="351" font-size="10px" fill="lightgrey" >1</text>' +

                                '<!-- LINE REGISTER MUX TO REGISTER FILE -->' +
                                '<line id="regMuxToRegFileLine" class="idecodeObj" x1="260" y1=327 x2="264" y2="327" stroke="lightgrey" stroke-width="2px"></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="regMuxToRegFileArrow" class="idecodeObj" d="M 264,327 264,325 268,327 264,329 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- CONTROL ELLIPSE -->' +
                                '<ellipse id="controlEllipse" class="idecodeObj, idtorqObj" cx="260" cy="190" rx="55" ry="25" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,260,190)" ></ellipse>' +
                                '<text id="controlEllipseTxt" class="idtorq" x="240" y="195" font-size="11px" fill="lightgrey" >Control</text>' +

                                '<!-- CONTROL ELLIPSE TO INSTRUCTION MUX -->' +
                                '<path id="regDistToInstMux" class="idecodeObj, idtorqObj" d="M 273,144 295,144 295,125 150,125 150,368 248,368 248,355" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<text id="regDistTxt" class="idtorq" x="300" y="140" font-size="9px" fill="lightgrey" >RegDst</text>' +

                                '<!-- CONTROL ELLIPSE TO OR GATE -->' +
                                '<path id="ctrlEllipseToOR" class="idecodeObj, idtorqObj" d="M 482,153 455,153 455,165 283,165" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<text id= "ctrlEllipseToORText" class="idtorq" x="290" y="160" font-size="9px" fill="lightgrey" >Branch</text>' +

                                '<!-- CONTROL ELLIPSE TO DATA MEMORY -->' +
                                '<text id="ctrlEllipseToDataMemTxt" class="idecode, idtorq" x="290" y="177" font-size="9px" fill="lightgrey" >MemRead</text>' +
                                '<path id="ctrlEllipseToDataMem" class="idecodeObj, idtorqObj" d="M 540,400 540,430 625,430 625,180 283,180" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- CONTROL ELLIPSE TO DATA MEMORY MUX -->' +
                                '<text id="ctrlEllToDataMemMuxTxt" class="idecode, idtorq" x="290" y="192" font-size="9px" fill="lightgrey" >MemtoReg</text>' +
                                '<path id="ctrlEllToDataMemMux" class="idecodeObj, idtorqObj" d="M 593,311 593,195 283,195" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- CONTROL ELLIPSE TO ALUOP -->' +
                                '<text id="ctrlEllToAluOpTxt" class="idecode, idtorq" x="290" y="205" font-size="9px" fill="lightgrey" >ALUOp</text>' +
                                '<path id="ctrlEllToAluOp" class="idecodeObj, idtorqObj" d="M 411,444 411,472 367,472 367,207 283,207" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- CONTROL ELLIPSE TO MEMWRITE -->' +
                                '<text id="ctrlEllToMemWriteTxt" class="idecode, idtorq" x="290" y="217" font-size="9px" fill="lightgrey" >MemWrite</text>' +
                                '<path id="ctrlEllToMemWrite" class="idecodeObj, idtorqObj" d="M 535,290 535,220 280,220" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- CONTROL ELLIPSE TO ALUSRC -->' +
                                '<text id="ctrlEllToAluSrcTxt" class="idecode, idtorq" x="290" y="231" font-size="9px" fill="lightgrey" >ALUSrc</text>' +
                                '<path id="ctrlEllToAluSrc" class="idecodeObj, idtorqObj" d="M 398,320 398,234 274,234" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- CONTROL ELLIPSE TO REGWRITE -->' +
                                '<text id="ctrlEllToRegWriteTxt" class="idecode, idtorq" x="315" y="245" font-size="9px" fill="lightgrey" >RegWrite</text>' +
                                '<path id="ctrlEllToRegWrite" class="idecodeObj, idtorqObj" d="M 305,250 305,245 263,245" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- REGISTER FILE RECT-->' +
                                '<!--Read register 1-->' +
                                '<rect id="regFileRect" class="idecodeObj" x="270" y="250" width="85" height="120" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></rect>' +
                                '<text id="regFileRectTxt" class="idecode" x="276" y="261" font-size="10px" fill="lightgrey" >RR1</text>' +

                                '<!--Read data 1-->' +
                                '<text id="readData1Txt" class="idecode" x="322" y="276" font-size="10px" fill="lightgrey" >RD1</text>' +

                                '<!--Read register 2-->' +
                                '<text id="readReg2Txt" class="idecode" x="276" y="296" font-size="10px" fill="lightgrey" >RR2</text>' +

                                '<!--Read data 2-->' +
                                '<text id="readData2Txt" class="idecode" x="322" y="324" font-size="10px" fill="lightgrey" >RD2</text>' +

                                '<!--Register File Label-->' +
                                '<text id="registerFileLabelTxt" class="idecode" x="306" y="366" font-size="11px" fill="lightgrey" >Registers</text>' +

                                '<!-- LINE READ DATA 1 TO ALU RESULT -->' +
                                '<line id="RD1ToAluResult" class="idecodeObj" x1="355" y1=285 x2="413" y2="285" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="RD1ToAluResultArrow" class="idecodeObj" d="M 413,285 413,283 417,285 413,287 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- LINE READ DATA 2 TO MUX ALU RESULT -->' +
                                '<line id="RD2ToAluResultCircle" class="idecodeObj" x1="355" y1=325 x2="362" y2="325" stroke="lightgrey" stroke-width="2px" ></line>' +

                                '<line id="RD2ToAluResult" class="idecodeObj" x1="362" y1=325 x2="377" y2="325" stroke="lightgrey" stroke-width="2px" ></line>' +

                                '<!-- Arrow point end of line-->' +
                                '<path id="RD2ToAluResultArrow" class="idecodeObj" d="M 377,325 377,323 381,325 377,327 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- SIGN-EXTED ELLIPSE-->' +
                                '<text id="signExtEllipTxtSign" class="idecode" x="299" y="407" font-size="11px" fill="lightgrey" >Sign-</text>' +
                                '<text id="signExtEllipTxtExt" class="idecode" x="299" y="420" font-size="11px" fill="lightgrey" >extend</text>' +
                                '<ellipse id="signExtEllip" class="idecodeObj" cx="315" cy="410" rx="30" ry="20" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,315,410)" ></ellipse>s' +

                                '<!-- REGISTER FILE READ DATA2 TO MEMORY WRITE DATA JUNCTION-->' +
                                '<circle id="RegFileRD2Circle" class="idecodeObj" cx="362" cy=325  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +


                                '<!-- LINE SIGN-EXTED ELLIPSE TO MUX 1-->' +
                                '<path id="signExtEllToMux1" class="idecodeObj" d="M 372,350 372,412 335,412" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- LINE MUX 1 CIRCLE TO SHIFT LEFT 2-->' +
                                '<path id="Mux1ToShiftLeft2" class="idecodeObj" d="M 375,140 372,140 372,350" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<line id="Mux1ToShiftLeft2Line" class="idecodeObj" x1="372" y1=140 x2="373" y2="140"  stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="Mux1ToShiftLeftArrow" class="idecodeObj" d="M 373,140 373,138 377,140 373,142 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- LINE SIGN-EXTED 32 TO MUX 1 ALU IN JUNCTION-->' +
                                '<circle id="signExt32ToMux1Circle" class="idecodeObj" cx="372" cy="350"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
                                '<line id="signExt32ToMux1Ln" class="idecodeObj" x1="372" y1=350 x2="377" y2="350" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="signExt32ToMux1Arrow" class="idecodeObj" d="M 377,350 377,348 381,350 377,352 z" style="fill:lighgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- END ### ID ###-->' +
                                '</g>' +


                                '<!-- START ### EX ###-->' +
                                '<g id="EX">' +
                                '<!-- ALU CONTROL ELLIPSE-->' +
                                '<ellipse id="aluControlEll" class="excodeObj, extorqObj" cx="410" cy="415" rx="30" ry="20" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,410,415)" ></ellipse>' +
                                '<text id="aluControlEllTxtALU" class="excode, extorq" x="398" y="410" font-size="11px" fill="lightgrey" >ALU</text>' +
                                '<text id="aluControlEllTxtCtrl" class="excode, extorq" x="392" y="422" font-size="11px" fill="lightgrey" >control</text>' +

                                '<!-- ALU CONTROL ELLIPSE TO ALU-->' +
                                '<path id="aluControlEllToAlu" class="excodeObj, extorqObj" d="M 445,350 445,415 431,415" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<!-- MUX INTO ALU -->' +
                                '<g transform="translate(384,310)">' +
                                '<path id="muxIntoAlu1" class="excodeObj" d="M 2.92 17 L 23.08 17 C 31.87 17 39 21.92 39 28 C 39 34.08 31.87 39 23.08 39 L 2.92 39 C -5.87 39 -13 34.08 -13 28 C -13 21.92 -5.87 17 2.92 17 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,13,28)" pointer-events="none"></path>' +
                                '<path id="muxIntoAlu2" d="M 2 28 L 2 28" fill="none" stroke="lightgrey" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '</g>' +
                                '<line id="muxIntoAluBott" class="excodeObj" x1="408" y1=340 x2="413" y2="340" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="muxIntoAluBottArrow" class="excodeObj" d="M 413,340 413,338 417,340 413,342 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<text id="muxIntoAluTxt0" class="excode" x="394" y="322" font-size="10px" fill="lightgrey" >0</text>' +
                                '<text id="muxIntoAluTxtM" class="excode" x="392" y="332" font-size="10px" fill="lightgrey" >M</text>' +
                                '<text id="muxIntoAluTxtU" class="excode" x="393" y="340" font-size="10px" fill="lightgrey" >u</text>' +
                                '<text id="muxIntoAluTxtX" class="excode" x="393" y="348" font-size="10px" fill="lightgrey" >x</text>' +
                                '<text id="muxIntoAluTxt1" class="excode" x="394" y="358" font-size="10px" fill="lightgrey" >1</text>' +

                                '<!-- Main ALU -->' +
                                '<g transform="translate(420,260)">' +
                                '<path id="mainAlu1" class="excodeObj" d="M -16.82 20.05 L 21.27 20.05" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,20.05)" pointer-events="none" ></path>' +
                                '<path id="mainAlu2" class="excodeObj" d="M -16.82 81.95 L 21.27 81.95" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,81.95)" pointer-events="none" ></path>' +
                                '<path id="mainAlu3" class="excodeObj" d="M 26.39 49.81 L 81.15 49.81" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,53.77,49.81)" pointer-events="none" ></path>' +
                                '<path id="mainAlu4" class="excodeObj" d="M 2 1.33 L 53.67 22.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '<path id="mainAlu5" class="excodeObj" d="M 2 101.33 L 53.67 77.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '<path id="mainAlu6" class="excodeObj" d="M 2 63 L 8.36 51" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '<path id="mainAlu7" class="excodeObj" d="M 8.36 51 L 2 38.83" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '</g>' +
                                '<text id="mainAluTxt0" class="excode" x="450" y="290" font-size="10px" fill="lightgrey" >Zero</text>' +
                                '<text id="mainAluTxtALU" class="excode" x="430" y="314" font-size="10px" fill="lightgrey" >ALU</text>' +
                                '<text id="mainAluTxtALU2" class="excode" x="450" y="323" font-size="10px" fill="lightgrey" >ALU</text>' +
                                '<text id="mainAluTxtResult" class="excode" x="445" y="333" font-size="10px" fill="lightgrey" >result</text>' +


                                '<!-- ALU ZERO TO AND -->' +
                                '<path id="aluZeroToOrLine" class="excodeObj, extorqObj" d="M 481,169 477,169 480,290 475,290" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +

                                '<g transform="translate(5,10)">' +
                                '<!-- SHIFT LEFT 2 ELLIPSE-->' +
                                '<ellipse id="shiftLeft2Ell" class="excodeObj" cx="390" cy="130" rx="20" ry="15" style="fill:none;stroke:lightgrey;stroke-width:2px;" transform="rotate(90,390,130)" ></ellipse>' +
                                '<text id="shiftLeft2EllTxtShift" class="excode notR" x="378" y="128" font-size="11px" fill="lightgrey" >Shift</text>' +
                                '<text id="shiftLeft2EllTxtLeft2" class="excode notR" x="378" y="138" font-size="11px" fill="lightgrey" >left 2</text>' +
                                '</g>' +

                                '<!-- LINE SHIFT LEFT 2 TO ALU BOTT INPUT-->' +
                                '<line id="shiftLeft2ToAluIn" class="excodeObj" x1="410" y1="138" x2="418" y2="138" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="shiftLeft2ToAluInArrow" class="excodeObj" d="M 418,138 418,136 422,138 418,140 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- ALU SHIFT left 2 to PC-->' +
                                '<g transform="translate(425,60)">' +
                                '<path id="aluShiftLeft1" class="excodeObj" d="M -16.82 20.05 L 21.27 20.05" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,20.05)" pointer-events="none" ></path>' +
                                '<path id="aluShiftLeft2" class="excodeObj" d="M -16.82 81.95 L 21.27 81.95" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,2.23,81.95)" pointer-events="none" ></path>' +
                                '<path id="aluShiftLeft3" class="excodeObj" d="M 26.39 49.81 L 81.15 49.81" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,53.77,49.81)" pointer-events="none" ></path>' +
                                '<path id="aluShiftLeft4" class="excodeObj" d="M 2 1.33 L 53.67 22.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '<path id="aluShiftLeft5" class="excodeObj" d="M 2 101.33 L 53.67 77.17" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '<path id="aluShiftLeft6" class="excodeObj" d="M 2 63 L 8.36 51" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '<path id="aluShiftLeft7" class="excodeObj" d="M 8.36 51 L 2 38.83" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '</g>' +
                                '<text id="aluShiftTxtAdd" class="excode" x="435" y="115" font-size="11px" fill="lightgrey" >Add</text>' +
                                '<text id="aluShiftTxtAlu" class="excode" x="435" y="92" font-size="11px" fill="lightgrey" >Branch</text>' +
                                '<text id="aluShiftTxtResult" class="excode" x="450" y="102" font-size="11px" fill="lightgrey" >ALU</text>' +

                                '<!-- LINE ALU RESULT TO MUX -->' +
                                '<line id="lineAluResult2Mux" class="excodeObj" x1="480" y1="110" x2="505" y2="110"  stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="AluResult2MuxArrow" class="excodeObj" d="M 505,110 505,108 509,110 505,112 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- ALU RESULT TO ADDRESS -->' +
                                '<line id="aluResultToAddr" class="excodeObj" x1="475" y1=320 x2="484" y2="320"  stroke="lightgrey" stroke-width="2px" ></line>' +

                                '<!-- JUNCTION BETWEEN DATA MEMORY AND WB MUX-->' +
                                '<circle id="aluResultToAddrCircle"class="excodeObj" cx="484" cy="320"  r="2" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;" ></circle>' +
                                '<!-- END ### EX ###-->' +
                                '</g>' +


                                '<!-- START ### MEM ###-->' +
                                '<g id="MEM">' +
                                '<!-- DATA MEMORY-->' +
                                '<rect id="dataMemRect" class="memcodeObj" x="500" y="290" width="65" height="110" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></rect>' +
                                '<text id="dataMemRectTxtAdd" class="memcode" x="503" y="325" font-size="10px" fill="lightgrey" >Address</text>' +
                                '<text id="dataMemRectTxtRead" class="memcode" x="540" y="318" font-size="10px" fill="lightgrey" >Read</text>' +
                                '<text id="dataMemRectTxtData" class="memcode" x="542" y="328" font-size="10px" fill="lightgrey" >data</text>' +
                                '<text id="dataMemRectTxtWrite" class="memcode" x="503" y="370" font-size="10px" fill="lightgrey" >Write</text>' +
                                '<text id="dataMemRectTxt2Data" class="memcode" x="503" y="380" font-size="10px" fill="lightgrey" >data</text>' +
                                '<text id="dataMemRectTxt3Data" id="dataMemRect" class="memcode" x="538" y="385" font-size="11px" fill="lightgrey" >Data</text>' +
                                '<text id="dataMemRectTxtMem" class="memcode" x="522" y="395" font-size="11px" fill="lightgrey" >memory</text>' +

                                '<!-- LINE READ DATA 2 TO WRITE DATA -->' +
                                '<path id="lineRD2toMemWD" class="memcodeObj" d="M 495,375 362,375 362,325" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="lineRD2toMemWDArrow" class="memcodeObj" d="M 493,375 493,373 497,375 493,377  z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +


                                '<!-- ALU RESULT TO ADDRESS -->' +
                                '<line id="aluResultToAddr1" class="memcodeObj" x1="484" y1=320 x2="491" y2="320"  stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="aluResultToAddrArrow" class="memcodeObj" d="M 491,320 491,318 495,320, 491,322 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +


                                '<!-- LINE ALU RESULT TO WB MUX-->' +
                                '<path id="lineAluResultToMux0" class="memcodeObj" d="M 575,350 572,350 572,415 484,415 484,320" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="AluResultToMux0Arrow" class="memcodeObj" d="M 575,350 575,348 579,350 575,352 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- ALU RESULT MUX -->' +
                                '<g transform="translate(510,50)">' + '' +
                                '<path id="pcAluResultMux" class="memcodeObj" d="M 1.51 23 L 27.49 23 C 38.82 23 48 28.6 48 35.5 C 48 42.4 38.82 48 27.49 48 L 1.51 48 C -9.82 48 -19 42.4 -19 35.5 C -19 28.6 -9.82 23 1.51 23 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,14.5,35.5)" pointer-events="none" ></path>' +
                                '</g>' +
                                '<text id="pcAluResultMuxTxt0" class="memcode" x="522" y="65" font-size="12px" fill="lightgrey" >0</text>' +
                                '<text id="pcAluResultMuxTxtM" class="memcode" x="520" y="80" font-size="12px" fill="lightgrey" >M</text>' +
                                '<text id="pcAluResultMuxTxtU" class="memcode" x="521" y="90" font-size="12px" fill="lightgrey" >u</text>' +
                                '<text id="pcAluResultMuxTxtX" class="memcode" x="521" y="100" font-size="12px" fill="lightgrey" >x</text>' +
                                '<text id="pcAluResultMuxTxt1" class="memcode" x="522" y="114" font-size="12px" fill="lightgrey" >1</text>' +

                                '<!-- AND -->' +
                                '<!-- LINE OR GATE TO PC ALU MUX -->' +
                                '<path id="lineANDToAluMux" class="memcodeObj, memtorqObj" d="M  525,119 525,160 510,160" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<text id="lineANDToAluMuxTxtPCSrc" class="memcode, memtorq" x="530" y="164" font-size="10px" fill="lightgrey" >PCSrc</text>' +

                                '<!-- AND GATE -->' +
                                '<g transform="translate(479,144)">' +
                                '<path id="oRGate" class="memcodeObj, memtorqObj"d="M 2 4.5 C 2 3.84 2.16 3.2 2.45 2.73 C 2.73 2.26 3.12 2 3.53 2 L 26.12 2 C 29.7 4.69 32 10.55 32 17 C 32 23.45 29.7 29.31 26.12 32 L 3.53 32 C 3.12 32 2.73 31.74 2.45 31.27 C 2.16 30.8 2 30.16 2 29.5 L 2 4.5 Z" fill="none" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" pointer-events="none"/>' +
                                '</g>' +

                                '<!-- LINE ALU RESULT MUX TO PC -->' +
                                '<path id="aluMuxToPC" class="memcodeObj"  d="M 25,275 22,275 22,23 545,23 545,84 536,84" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!-- arrow -->' +
                                '<line class="memcode"  x1="23" y1="275" x2="26" y2="275" stroke-width="2px"></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="aluMuxToPCArrow" class="memcodeObj" d="M 26,275 26,273 30,275 26,277 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +
                                '<!-- END ### MEM ###-->' +
                                '</g>' +


                                '<!-- START ### WB ###-->' +
                                '<g id="WB">' +
                                '<!-- MEMORY MUX -->' +
                                '<g transform="translate(580,310)">' +
                                '<path id="memoryMux" class="wbcodeObj" d="M 2.92 17 L 23.08 17 C 31.87 17 39 21.92 39 28 C 39 34.08 31.87 39 23.08 39 L 2.92 39 C -5.87 39 -13 34.08 -13 28 C -13 21.92 -5.87 17 2.92 17 Z" fill="#ffffff" stroke="lightgrey" stroke-width="2" stroke-miterlimit="10" transform="rotate(90,13,28)" pointer-events="none" ></path>' +
                                '<path id="memoryMux2" class="wbcodeObj" d="M 2 28 L 2 28" fill="none" stroke="lightgrey" stroke-miterlimit="10" pointer-events="none" ></path>' +
                                '</g>' +

                                '<text id="memoryMuxTxt1" class="wbcode" x="590" y="325" font-size="10px" fill="lightgrey" >1</text>' +
                                '<text id="memoryMuxTxtM" class="wbcode" x="588" y="335" font-size="10px" fill="lightgrey" >M</text>' +
                                '<text id="memoryMuxTxtU" class="wbcode" x="589" y="343" font-size="10px" fill="lightgrey" >u</text>' +
                                '<text id="memoryMuxTxtX" class="wbcode" x="589" y="351" font-size="10px" fill="lightgrey" >x</text>' +
                                '<text id="memoryMuxTxt0" class="wbcode" x="590" y="361" font-size="10px" fill="lightgrey" >0</text>' +

                                '<!-- LINE BETWEEN DATA MEMORY AND WB MUX-->' +
                                '<line id="lineDataMemToMux" class="wbcodeObj" x1="566" y1=324 x2="575" y2="324" stroke="lightgrey" stroke-width="2px" ></line>' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="DataMemToMuxArrow" class="wbcodeObj" d="M 575,324 575,322 579,324 575,326 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

                                '<!-- LINE MEMORY MUX TO REGISTER WRITE DATA  -->' +
                                '<path id="lineMemMuxToRD" class="wbcodeObj" d="M 265,360 256,360 256,486 614,486 614,340 603,340" style="fill:none;stroke:lightgrey;stroke-width:2px;" ></path>' +
                                '<!--line class="wbcode" x1="262" y1=360 x2="262" y2="360"  stroke="lightgrey" stroke-width="2px" ></line-->' +
                                '<!-- Arrow point end of line-->' +
                                '<path id="MemMuxToRDArrow" class="wbcodeObj" d="M 262,360 262,358 266,360 262,362 z" style="fill:lightgrey;stroke:lightgrey;stroke-width:2px;"></path>' +

        '<!--Write register-->' +
        '<text id="writeRegTxt"class="wbcode" x="276" y="326" font-size="10px" fill="lightgrey" >WR</text>' +

        '<!--Write data-->' +
        '<text id="writeData" class="wbcode" x="276" y="354" font-size="10px" fill="lightgrey" >WD</text>' +



        '<!-- END ### WB ###-->' +
                                '</g>' +

                                '<!-- START TIMING LINES ### TM ### -->' +
                                '<!--line class="timing" id="iftime" x1="25" y1="490" x2="145" y2="490" stroke="lightgrey" stroke-width="10px"></line-->' +
                                '<!--line class="timing" id="idtime" x1="147" y1="490" x2="365" y2="490" stroke="lightgrey" stroke-width="10px"></line-->' +
                                '</g>' +

                                '</svg>' +

            '</div>' +

                                    '<div id="stages" class="col-md-4" align="right">' +
        '<select class="form-control" id="stageDisplayType">' +
        '<option>Binary</option>' +
        '<option>Decimal</option>' +
        '<option>Hex</option>' +
        '</select>' +

            '<!--div id="stageButtons" align="left"--><!--/div-->' +  // previous
            '<ul id="stageTabs" class="nav nav-tabs"></ul>' +  // previous
                                        '<div id="dataTabs" class="tab-content" font-size="10px">' +
                                            '<div class="tab-pane" id="if">' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">Instruction Memory</li>' +
                                                '<li id="pc" class="tabData" align="left" fill="lightgrey">PC (in): </li>' +
                                                '<li id="inst" class="tabData" align="left" fill="lightgrey">Instruction [31 - 0] (out): </li>' +
                                            '</div>' +

                                            '<div class="tab-pane" id="id">' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<div class="tabData" align="left" style="color: #428bca;">Register File</div>' +
                                                '<li id="rd1" class="tabData" align="left" fill="lightgrey">RD1 (out): </li>' +
                                                '<li id="rd2" class="tabData" align="left" fill="lightgrey">RD2 (out): </li>' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">Sign Extend 32</li>' +
                                                '<li id="signext32" align="left" fill="lightgrey">Result (out): </li>' +
                                            '</div>' +

                                            '<div class="tab-pane" id="ex">' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">ALU (Arithmetic Logic Unit)</li>' +
                                                '<li id="aluinbot" class="tabData" align="left" fill="lightgrey">ALU from Mux (in): </li>' +
                                                '<li id="aluresult" class="tabData" align="left" fill="lightgrey">ALU Result (out): </li>' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">Shift Left 2</li>' +
                                                '<li id="shiftleft2" class="tabData" align="left" fill="lightgrey">Result (out): </li>' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">Branch ALU</li>' +
                                                '<li id="pcsl2addresult" class="tabData" align="left" fill="lightgrey">Result (out): </li>' +
                                                '<li align="left"></li>' +
                                            '</div>' +

                                            '<div class="tab-pane" id="mem">' +
                                                '<div class="medRow"></div>' +
                                                '<div class="lineRow"></div>' +
                                                '<li class="tabData" align="left" style="color: #428bca;">Data Memory</li>' +
                                                    '<li id="aluresultmemval" class="tabData" align="left" fill="lightgrey">ALU Result (in): </li>' +
                                                    '<li id="rd2mem" class="tabData" align="left" fill="lightgrey">Write Data from RD2 (in): </li>' +
                                                    '<li id="wdmemreaddataresult" class="tabData" align="left">Read Data Result (out): </li>' +
                                                '<div class="medRow"></div>' +
                                                '<div class="lineRow"></div>' +
                                                    '<li class="tabData" align="left" style="color: #428bca;">Mux</li>' +
                                                    '<li id="newpc" class="tabData" align="left">New PC (out): </li>' +
                                                    '<li id="pcsrc" class="tabData" align="left">PCSrc (in) : </li>' +
                                                '<li align="left"></li>' +
                                            '</div>' +

                                            '<div class="tab-pane" id="wb">' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">Data Memory</li>' +
                                                '<li id="memoryreaddataresult" class="tabData" align="left">Read Data Result (out): </li>' +
                                            '<div class="medRow"></div>' +
                                            '<div class="lineRow"></div>' +
                                            '<li class="tabData" align="left" style="color: #428bca;">Register File</li>' +
                                                '<li id="wd" class="tabData" align="left">Write Data (in): </li>' +
                                                '<li align="left"></li>' +
                                            '</div>' +

                                            '<div class="tab-pane" id="all">' +
                                                '<div class="lineRow"></div>'+
                                                '<li class="tabData" align="left" style="color: #428bca;">IF</li>' +
                                                '<!--li class="tabData" align="left" style="color: #428bca;">Instruction Memory</li-->' +
                                                '<li id="pc" class="tabData" align="left">PC: </li>' +
                                                '<li id="inst" class="tabData" align="left" fill="lightgrey">Instruction [31 - 0] (out): </li>' +


                                                '<div class="medRow"></div>' +
                                                '<div class="lineRow"></div>' +
                                                '<li class="tabData" align="left" style="color: #428bca;">ID</li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Register File</li-->' +
                                                    '<li id="rd1" class="tabData" align="left">Register File RD1: </li>' +
                                                    '<li id="rd2" class="tabData" align="left">Register File RD2: </li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Sign Extend 32</li-->' +
                                                    '<li id="signext32" class="tabData" align="left">Sign Extend 32 Result (out): </li>' +

                                                '<div class="medRow"></div>' +
                                                '<div class="lineRow"></div>'+
                                                '<li class="tabData" align="left" style="color: #428bca;">EX</li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">ALU (Arithmetic Logic Unit)</li-->' +
                                                    '<li id="aluinbot" class="tabData" align="left">ALU from Mux: (in) </li>' +
                                                    '<li id="aluresult" class="tabData" align="left">ALU Result (out): </li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Shift Left 2</li-->' +
                                                    '<li id="shiftleft2" class="tabData" align="left">Shift Left 2 Result (out): </li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Branch ALU</li-->' +
                                                    '<li id="pcsl2addresult" class="tabData" align="left">Branch ALU Result (out): </li>' +

                                                '<div class="medRow"></div>' +
                                                '<div class="lineRow"></div>'+
                                                '<li class="tabData" align="left" style="color: #428bca;">MEM</li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Data Memory</li-->' +
                                                    '<li id="aluresultmemval" class="tabData" align="left" fill="lightgrey">ALU Result (in): </li>' +
                                                    '<li id="rd2mem" class="tabData" align="left" fill="lightgrey">Write Data from RD2 (in): </li>' +
                                                    '<li id="memoryreaddataresult" class="tabData" align="left">Read Data Result (out): </li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Mux</li-->' +
                                                    '<li id="newpc" class="tabData" align="left">Mux New PC (out): </li>' +
                                                    '<!--li id="pcsrc" class="tabData" align="left">PC Source (PCSrc): </li-->' +

                                                '<div class="medRow"></div>' +
                                                '<div class="lineRow"></div>'+
                                                '<li class="tabData" align="left" style="color: #428bca;">WB</li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Mux</li-->' +
                                                    '<li id="memoryreaddataresult" class="tabData" align="left">Read Data Result (out): </li>' +
                                                    '<!--li class="tabData" align="left" style="color: #428bca;">Register File</li-->' +
                                                    '<li id="wd" class="tabData" align="left">Register File Write Data (in): </li>' +
                                                    '<li ></li>' +
                                            '</div>' +



                                            '<div class="tab-pane active" id="reset">' +

                                                '<li ></li>' +
                                                '<li ></li>' +

                                            '</div>' +
                                        '</div>' +


                                    '</div>' +
                    '</div>' +

                    '<!-- MODAL FOOTER DEFINITION BEGINS DO NOT CHANGE FOLLOWING LINES -->' +
                        '<div id="modal-buttons" role="group" aria-label="First group" class="modal-footer" style="text-align:right; background-color: black;"> ' +
                        '</div>' +
            '</div>' +
        '</div>' +

        '<!-- MODAL DEFINITION END -->'
    );


    var iftoggle = 0;
    var idtoggle = 0;
    var extoggle = 0;
    var memtoggle = 0;
    var wbtoggle = 0;
    var done;
    var instructionIn = " ";
    var instructionFormat = " ";
    var pc = 32768;
    var newFormat = "binary";
    var currentFormat = "binary";
    var debug = false;

    // used by the makeButtons function to create buttons in the modal footer
    var stageKeys = ["IF", "ID", "EX", "MEM", "WB", "All", "Reset"];
    var dataKeys = ["Close"];

    if (debug) {
        console.log("START CurrentLine['lineNo'] ", CurrentLine['lineNo']);
        console.log("START previousLine ", previousLine);
    }


    var allRegs = [
        '$zero', '$at', '$v0', '$v1', '$a0', '$a1', '$a2', '$a3',
        '$t0', '$t1', '$t2', '$t3', '$t4', '$t5', '$t6', '$t7',
        '$s0', '$s1', '$s2', '$s3', '$s4', '$s5', '$s6', '$s7',
        '$t8', '$t9', '$k0', '$k1', '$gp', '$sp', '$fp', '$ra'
    ];


    /**
     * Hash table of elements : elementValues
     * @property elements: elementValues
     * @type {Object}
     */
    var mipsValues = {};

    /**
     * Array of all elements
     * @property mipsValues
     * @type {Array}
     */
    // change svg elements id tags to match the items in elements
    var elements = [
        'PC', 'pcTxt', 'pcToInstMem', 'pcArrow', 'pcCircle',
    /*   0       1         2             3          4                                                                */
        'pcAluIn', 'pcAddArrow', 'fourAluIn', 'inst31ToCtrl', 'regDst', 'aluSrc',
    /*   5                6             7          8             9          10                                       */

        'aluOp0', 'aluOp1', 'inst5ToAluCtrl', 'RD1', 'aluInBot', 'aluCtrlOut',
    /*   11          12         13              14       15         16                                               */

        'zero', 'aluResult', 'branch', 'PCSrc', 'PcAdderResult', 'inst15ToSignExt',
    /*   17         18          19        20          21            22                                               */

        'signExt32', 'shiftLeft2', 'PcSl2AddResult', 'newPc', 'memoryReadDataResult', 'memToReg',
    /*   23               24            25             26            27                   28                         */

        'pcAluResultMuxTxt0', 'pcAluResultMuxTxt1', 'instToRR1',   'inst20ToRR2',
        /*   29                      30                     31          32            33                 34              */

        'fourAluArrow', 'fourTxt', 'instMemRect', 'instMemTxtRead',
        'instMemTxtAddress', 'instMemTxtInst', 'instMemTxt31', 'instMemTxtIns31', 'instMemTxtMem',
        'pcAluObj1', 'pcAluObj2', 'pcAluObj3', 'pcAluObj4', 'pcAluObj5',
        'pcAluObj6', 'pcAluObj7', 'addTxt',  'inst20ToCircle',
        'inst31Txt', 'inst31Arrow', 'inst25Txt', 'inst25Arrow', 'inst25Circle',
        'inst20Txt', 'inst20MUX0Arrow','inst20Circle','inst20ToMux','inst20MuxArrow',
        'inst20MuxCircle', 'inst15Txt', 'inst15Arrow', 'inst15Circle', 'instMemLine',
        'instMemCircle', 'instDistLine', 'inst15To0Txt', 'regMuxTxt0', 'regMuxTxtM',
        'regMuxTxtU', 'regMuxTxtX', 'regMuxTxt1', 'regMuxToRegFileLine', 'regMuxToRegFileArrow',
        'controlEllipse', 'controlEllipseTxt', 'regDistTxt','ctrlEllipseToOR', 'ctrlEllipseToORText',
        'ctrlEllipseToDataMem', 'ctrlEllipseToDataMemTxt', 'ctrlEllToDataMemMux','ctrlEllToDataMemMuxTxt', 'ctrlEllToAluOpTxt',
        'ctrlEllToAluOp', 'ctrlEllToMemWriteTxt', 'ctrlEllToMemWrite', 'ctrlEllToAluSrcTxt', 'ctrlEllToAluSrc',
        'ctrlEllToRegWriteTxt', 'ctrlEllToRegWrite', 'regFileRect', 'regFileRectTxt', 'readData1Txt',
        'readReg2Txt', 'readData2Txt', 'writeRegTxt', 'writeData', 'registerFileLabelTxt', 'RD2ToAluResultCircle',
        'RD1ToAluResult', 'RD1ToAluResultArrow', 'RD2ToAluResult','signExtEllip', 'signExtEllipTxtSign',
        'Mux1ToShiftLeft2Line',  'Mux1ToShiftLeftArrow', 'signExt32ToMux1Circle', 'signExt32ToMux1Ln', 'signExt32ToMux1Arrow',
        'aluControlEll', 'aluControlEllTxtALU', 'aluControlEllTxtCtrl', 'aluControlEllToAlu', 'muxIntoAlu1',
        'muxIntoAlu2', 'muxIntoAluBott', 'muxIntoAluBottArrow', 'RD2ToAluResultArrow', 'muxIntoAluTxt0',
        'muxIntoAluTxtM', 'muxIntoAluTxtU', 'muxIntoAluTxtX', 'muxIntoAluTxt1', 'mainAlu1',
        'mainAlu2', 'mainAlu3', 'mainAlu4', 'mainAlu5', 'mainAlu6',
        'mainAlu7', 'mainAluTxt0', 'mainAluTxtALU', 'mainAluTxtALU2', 'mainAluTxtResult',
        'aluResultToAddr', 'aluResultToAddr1', 'aluResultToAddrArrow', 'aluResultToAddrCircle', 'aluZeroToOrLine',
        'shiftLeft2Ell', 'shiftLeft2EllTxtShift', 'shiftLeft2EllTxtLeft2', 'shiftLeft2ToAluIn', 'shiftLeft2ToAluInArrow',
        'aluShiftLeft1', 'aluShiftLeft2', 'aluShiftLeft3', 'aluShiftLeft4', 'aluShiftLeft5',
        'aluShiftLeft6', 'aluShiftLeft7', 'aluShiftTxtAdd', 'aluShiftTxtAlu', 'aluShiftTxtResult',
        'lineRD2toMemWD', 'lineRD2toMemWDArrow', 'lineAluResult2Mux', 'AluResult2MuxArrow', 'dataMemRect',
        'dataMemRectTxtAdd', 'dataMemRectTxtRead', 'dataMemRectTxtData', 'dataMemRectTxtWrite', 'dataMemRectTxt2Data',
        'dataMemRectTxt3Data', 'dataMemRectTxtMem', 'lineDataMemToMux', 'DataMemToMuxArrow', 'lineAluResultToMux0',
        'AluResultToMux0Arrow', 'pcAluResultMux',  'pcAluResultMuxTxtM', 'pcAluResultMuxTxtU',
        'pcAluResultMuxTxtX',  'oRGate', 'lineANDToAluMux', 'lineANDToAluMuxTxtPCSrc',
        'aluMuxToPC', 'aluMuxToPCArrow', 'memoryMux', 'memoryMux2', 'memoryMuxTxt1',
        'memoryMuxTxtM', 'memoryMuxTxtU', 'memoryMuxTxtX', 'memoryMuxTxt0', 'lineMemMuxToRD',
        'MemMuxToRDArrow',
        'addAluToMux', 'addAluToMuxArrow', 'fourAluToAluTopCircle', 'fourAluToAluTopLine', 'fourAluToAluTopArrow',
        'signExtEllipTxtExt', 'RegFileRD2Circle', 'signExtEllToMux1', 'Mux1ToShiftLeft2',
        'inst20ToMux', 'inst15ToMux', 'inst5ToAluCtrlTxt', 'inst5ToAluCtrl',
        'inst5ToAluCtrlArrow', 'instToAluCtrlCircle', 'registerMux1','registerMux2',
        'jump', 'memRead', 'aluResultMemVal',
        'memWrite', 'regWrite', 'RR1', 'RR2', 'WR',
        'WD', 'RD2',
        "intoSignExt16", "intoSignExtArrow16", "signExt16Txt", "signExt16DiagLine", "signExt32Txt",
        "signExt32DiagLine", 'wdMemReadDataResult', 'rd2Mem', 'inst'
    ];


    function getInstruction () {
        var partialInst = " ";
        var tempFields;

        // BEQ instructions do not have an associated binary address this is used to create one.
        if (LabelLineNo !== null) {
            var labelAddress = LabelLineNo;
            partialInst = CurrentLine["assembledInstruction"].slice(0, 19);
            var addressBinary = partialInst + MIPS.numberToBinaryString(labelAddress, 16) + " I";

            CurrentLine["assembledInstruction"] = addressBinary;
            instructionFormat = CurrentLine["assembledInstruction"].slice(-1);

            instructionIn = CurrentLine["text"];
            tempFields = instructionIn.split(/#/);
            instructionIn = tempFields[0];

            if (debug) {
                console.log("partialInst is: ", partialInst);
                console.log("the label  is: ", labelAddress);
                console.log("the label is binary16 bit: ", MIPS.numberToBinaryString(labelAddress, 16));
                console.log("CurrentLine with label as binary is: ", addressBinary);
                console.log("CurrentLine[text] no comment is: ", instructionIn);
                console.log("instruction format is: ", instructionFormat);
                console.log("CurrentLine[assembledInstruction] is: ", CurrentLine["assembledInstruction"]);
            }


        } else {
            partialInst = CurrentLine["assembledInstruction"].slice(0, 18);
            instructionIn = CurrentLine["text"];
            tempFields = instructionIn.split(/#/);
            instructionIn = tempFields[0];
            instructionFormat = CurrentLine["assembledInstruction"].slice(-1);

            if (debug) {
                console.log("partialInst is: ", partialInst);
                console.log("CurrentLine[text] no comment is: ", instructionIn);
                console.log("CurrentLine[assembledInstruction] is: ", CurrentLine["assembledInstruction"]);
                console.log("instruction format is: ", instructionFormat);
            }
        }

    }
    getInstruction();


    function displayInstruction () {
        // Display the current instruction text,  instruction format and instruction in binary
        d3.select("#instruction").append("text")
            .text(instructionIn)
            .style("font-size", "17px")
            .attr("id", "displayInstructionText")
            .attr("class", "initialize");
        //.attr("x", 20)
        //.attr("y", 11);

        d3.select("#start").append("text")
            .text("Format: " + instructionFormat)
            .style("font-size", "12px")
            .attr("id", "displayInstructionFormat")
            .attr("class", "initialize")
            .attr("x", 400)
            .attr("y", 11);

        d3.select("#start").append("text")
            .text("Instruction in Binary: " + CurrentLine["assembledInstruction"].slice(0, -1))
            .style("font-size", "12px")
            .attr("id", "displayInstructionBinary")
            .attr("class", "initialize")
            .attr("x", 10)
            .attr("y", 11);

    }
    displayInstruction();


    function creditAuthor () {
        if (CurrentLine["lineNo"] != previousLine) {
            return d3.select("svg").append("text")
                .text("Patterson, D. and Hennessy, J. Computer Organization and Design. 3rd ed. Morgan Kaufmann, 2005. 307-14. Print. Reprinted with permission.")
                .style("font-size", "9px")
                .attr("id", "author")
                .attr("class", "initialize")
                .attr("x", 15)
                .attr("y", 520);
        }

    }
    creditAuthor();


    // This function sets all elements in the mipsValues object. All line values displayed and line visibility are set.
    function initializeElements() {
        if (CurrentLine["lineNo"] != previousLine) {
            for (var i = 0; i < elements.length; i++) {
                mipsValues[elements[i]] = setElementValues(elements[i], i);
                //setupStageValues(elements[i]);
                if (debug) {
                    console.log("lineValues: ", mipsValues[elements[i]]);
                }
            }
        }
    }
    initializeElements();


    // returns a object containing the value, coordinates, stage, visibility and mutability of an element.
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
            stage: getStage(lineName),
            /**
             * Determine the element visibility.
             * @type boolean
             */
            vis: setElementVisibility(lineName),
            /**
             * Indicates if element can be mutated into; decimal, hexadecimal, binary.
             * @type boolean
             */
            mutable: setMutable(lineName)


        };
    } // end function setElementValues(lineName, lineNumber)


    // Set mutable.  If user changes type: Binary, Hex, Decimal then some elements should not be changed.
    //This provides a way to filter which elements will be changed.
    function setMutable(lineName){
        switch (lineName) {
            case "PC":
            case "pcAluIn":
            case "PcAdderResult":
            case "inst31ToCtrl":
            case "instToRR1":
            case "inst20ToRR2":
            case "inst15ToMux":
            case "inst15ToSignExt":
            case "inst5ToAluCtrl":
            case "newPc":
            case "aluCtrlOut":
            case "RD1":
            case "RD2":
            case "aluInBot":
            case "aluResult":
            case "shiftLeft2":
            case "PcSl2AddResult":
            case "memoryReadDataResult":
            case "signExt32":
            case "WD":
            case "aluResultMemVal":
            case "wdMemReadDataResult":
            case "rd2Mem":
            case "inst":

                return true;
                break;

            default:
                return false;
        }
    }

    // Set control line and data path element visibility. Elements listed are not visible.
    function setElementVisibility(element) {
        // TODO: build a logic table as a 2D array to replace this mess

        if (debug) {
            console.log("setElementVisibility LineName is: ", element);
            console.log("setElementVisibility currentLine is", CurrentLine["lineNo"]);
        }

        if (instructionFormat === "R") {
            switch (CurrentLine["instruction"]) {
                case "ADD":
                    switch (element) {

                        case "inst20ToMux":
                        case "inst20MuxArrow":
                        case "intoSignExt16":
                        case "intoSignExtArrow16":
                        case "signExt16Txt":
                        case "signExt16DiagLine":
                        case "signExt32":
                        case "signExt32Txt":
                        case "signExt32DiagLine":
                        case "signExtEllip":
                        case "signExtEllipTxtSign":
                        case "signExtEllipTxtExt":
                        case "signExtEllToMux1":
                        case "Mux1ToShiftLeft2":
                        case "Mux1ToShiftLeft2Line":
                        case "Mux1ToShiftLeftArrow":
                        case "signExt32ToMux1Ln":
                        case "signExt32ToMux1Arrow":
                        case "signExt32ToMux1Circle":
                        case "aluResultToAddr1":
                        case "aluResultToAddrArrow":
                        case "shiftLeft2Ell":
                        case "shiftLeft2EllTxtShift":
                        case "shiftLeft2EllTxtLeft2":
                        case "shiftLeft2ToAluIn":
                        case "shiftLeft2ToAluInArrow":
                        case "aluShiftLeft1":
                        case "aluShiftLeft2":
                        case "aluShiftLeft3":
                        case "aluShiftLeft4":
                        case "aluShiftLeft5":
                        case "aluShiftLeft6":
                        case "aluShiftLeft7":
                        case 'aluShiftTxtAdd':
                        case 'aluShiftTxtAlu':
                        case 'aluShiftTxtResult':
                        case 'lineRD2toMemWD':
                        case 'lineRD2toMemWDArrow':
                        case 'lineAluResult2Mux':
                        case 'AluResult2MuxArrow':
                        case 'dataMemRect':
                        case 'dataMemRectTxtAdd':
                        case 'dataMemRectTxtRead':
                        case 'dataMemRectTxtData':
                        case 'dataMemRectTxtWrite':
                        case 'dataMemRectTxt2Data':
                        case 'dataMemRectTxt3Data':
                        case 'dataMemRectTxtMem':
                        case 'lineDataMemToMux':
                        case 'DataMemToMuxArrow':
                        case 'pcAluResultMuxTxt1':
                        case 'muxIntoAluTxt1':
                        case "regMuxTxt0":
                        case 'memoryMuxTxt1':
                        case "shiftLeft2":
                        case "PcSl2AddResult":
                        case "memoryReadDataResult":
                        case "wdMemReadDataResult":
                        case "rd2Mem":
                            return false;
                            break;

                        default:
                            return true;
                    }
            }

        }
        if (instructionFormat === "I") {
            switch (CurrentLine["instruction"]) {
                case "LW":
                    switch (element) {
                        case "inst15Txt":
                        case "inst15ToMux":
                        case "inst15Arrow":
                        case "RR2":
                        case "RD2":
                        case "readReg2Txt":
                        case "inst5ToAluCtrl":
                        case "inst5ToAluCtrlArrow":
                        case "regMuxTxt1":
                        case "inst20ToRR2":
                        case "inst20MUX0Arrow":
                        case "readData2Txt":
                        case "RD2ToAluResultCircle":
                        case "RD2ToAluResult":
                        case "RD2ToAluResultArrow":
                        case 'pcAluResultMuxTxt1':
                        case 'muxIntoAluTxt0':
                        case "RegFileRD2Circle":
                        case "Mux1ToShiftLeft2":
                        case "Mux1ToShiftLeftArrow":
                        case 'lineRD2toMemWD':
                        case 'lineRD2toMemWDArrow':
                        case 'shiftLeft2Ell':
                        case 'shiftLeft2EllTxtShift':
                        case 'shiftLeft2EllTxtLeft2':
                        case 'shiftLeft2ToAluIn':
                        case 'shiftLeft2ToAluInArrow':
                        case 'aluShiftLeft1':
                        case 'aluShiftLeft2':
                        case 'aluShiftLeft3':
                        case 'aluShiftLeft4':
                        case 'aluShiftLeft5':
                        case 'aluShiftLeft6':
                        case 'aluShiftLeft7':
                        case 'aluShiftTxtAdd':
                        case 'aluShiftTxtAlu':
                        case 'aluShiftTxtResult':
                        case 'lineAluResult2Mux':
                        case 'AluResult2MuxArrow':
                        case 'lineAluResultToMux0':
                        case 'AluResultToMux0Arrow':
                        case 'dataMemRectTxtWrite':
                        case 'dataMemRectTxt2Data':
                        case 'memoryMuxTxt0':
                            return false;
                            break;

                        default:
                            return true;
                    }


                case "SW":
                    switch (element) {
                        case "inst15Txt":
                        case "inst15ToMux":
                        case "inst15Arrow":
                        case "shiftLeft2":
                        case "inst5ToAluCtrl":
                        case "inst5ToAluCtrlArrow":
                        case "RD2ToAluResult":
                        case "RD2ToAluResultArrow":
                        case 'pcAluResultMuxTxt1':
                        case 'muxIntoAluTxt0':
                        case "Mux1ToShiftLeft2":
                        case "Mux1ToShiftLeftArrow":
                        case 'shiftLeft2Ell':
                        case 'shiftLeft2EllTxtShift':
                        case 'shiftLeft2EllTxtLeft2':
                        case 'shiftLeft2ToAluIn':
                        case 'shiftLeft2ToAluInArrow':
                        case 'aluShiftLeft1':
                        case 'aluShiftLeft2':
                        case 'aluShiftLeft3':
                        case 'aluShiftLeft4':
                        case 'aluShiftLeft5':
                        case 'aluShiftLeft6':
                        case 'aluShiftLeft7':
                        case 'aluShiftTxtAdd':
                        case 'aluShiftTxtAlu':
                        case 'aluShiftTxtResult':
                        case 'lineAluResult2Mux':
                        case 'AluResult2MuxArrow':
                        case 'lineAluResultToMux0':
                        case 'AluResultToMux0Arrow':
                        case 'memoryMuxTxt0':
                        case "PcSl2AddResult":
                        case 'lineDataMemToMux':
                        case 'DataMemToMuxArrow':
                        case 'memoryMux':
                        case 'memoryMux2':
                        case 'memoryMuxTxt1':
                        case 'memoryMuxTxtM':
                        case 'memoryMuxTxtU':
                        case 'memoryMuxTxtX':
                        case 'lineMemMuxToRD':
                        case 'dataMemRectTxtRead':
                        case 'dataMemRectTxtData':
                        case "inst20MUXArrow":
                        case "inst20MuxArrow":
                        case "inst20ToMux":
                        case "registerMux1":
                        case "registerMux2":
                        case "regMuxTxt0":
                        case "regMuxTxtM":
                        case "regMuxTxtU":
                        case "regMuxTxtX":
                        case "regMuxTxt1":
                        case "regMuxToRegFileLine":
                        case "regMuxToRegFileArrow":
                        case "writeRegTxt":
                        case "WR":
                        case "WD":
                        case "MemMuxToRDArrow":
                        case "writeData":
                        case "memoryReadDataResult":
                        case "wdMemReadDataResult":
                            return false;
                            break;

                        default:
                            return true;

                    }

                case "BEQ":
                    switch (element) {
                        case "WR":
                        case "writeRegTxt":
                        case "signExt32ToMux1Ln":
                        case "signExt32ToMux1Arrow":
                        case "writeData":
                        case "registerMux1":
                        case "registerMux2":
                        case "regMuxTxt0":
                        case "regMuxTxtM":
                        case "regMuxTxtU":
                        case "regMuxTxtX":
                        case "regMuxToRegFileLine":
                        case "regMuxToRegFileArrow":
                        case "inst20ToMux":
                        case "inst20MuxArrow":
                        case "inst15Txt":
                        case "inst15ToMux":
                        case "inst15Arrow":
                        case "inst5ToAluCtrl":
                        case "inst5ToAluCtrlArrow":
                        case "regMuxTxt1":
                        case 'muxIntoAluTxt1':
                        case 'lineRD2toMemWD':
                        case 'lineRD2toMemWDArrow':
                        case 'lineAluResultToMux0':
                        case 'AluResultToMux0Arrow':
                        case 'memoryMuxTxt0':
                        case 'aluResultToAddr1':
                        case 'aluResultToAddrArrow':
                        case 'dataMemRect':
                        case 'dataMemRectTxtAdd':
                        case 'dataMemRectTxtRead':
                        case 'dataMemRectTxtData':
                        case 'dataMemRectTxtWrite':
                        case 'dataMemRectTxt2Data':
                        case 'dataMemRectTxt3Data':
                        case 'dataMemRectTxtMem':
                        case 'lineDataMemToMux':
                        case 'DataMemToMuxArrow':
                        case 'memoryMux':
                        case 'memoryMux2':
                        case 'memoryMuxTxt1':
                        case 'memoryMuxTxtM':
                        case 'memoryMuxTxtU':
                        case 'memoryMuxTxtX':
                        case 'lineMemMuxToRD':
                        case 'MemMuxToRDArrow':
                        case 'aluResult':
                        case 'memoryReadDataResult':
                        case 'wdMemReadDataResult':
                        case 'WD':
                        case 'rd2Mem':
                            return false;
                            break;
                        case 'pcAluResultMuxTxt0':
                            if ((mipsValues[elements[20]].val) == "0"){
                                return true;
                            }else {
                                return false;
                            }
                            break;

                        default:
                            return true;

                    }
            }
        }
    }


    // gets the x and y coordinates for the element values
    // values with negative coordinates are not visible - nav tab implementation.
    function getXYcoordinates(lineName) {
        var defaultFormat = [0, 0];

        var coordinates = {

            //IF elements
            "PC": [-30, -365],
            "pcAluIn": [25, 50],
            "PcAdderResult": [168, 101],
            "inst": [-1,-1],

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
            "WD": [440, 497],
            "RD1": [-35, -469],
            "RD2": [-35, -482],
            "regDst": [239, 364],
            "jump": [210, 50],
            "branch": [485, 156],
            "memRead": [530, 409],
            "memToReg": [584, 310],
            "aluOp0": [420, 452],
            "aluOp1": [425, 452],
            "memWrite": [525, 286],
            "aluSrc": [389, 309],
            "aluCtrlOut" :[437, 425],
            "regWrite": [307, 245],
            "signExt32": [-470, -495],
            "aluInBot": [-110, -495],
            "intoSignExt16": [268, 412],
            "zero": [485, 170],
            "aluResult": [-65, -508],
            "PCSrc": [528, 130],

            // EX elements
            "shiftLeft2":[-95, -521],
            "PcSl2AddResult": [-95, -534],
            "newPc": [370, 35],

            // MEM elements
            "memoryReadDataResult":[-120, -547],
            "aluResultMemVal" : [-1,-1],
            "wdMemReadDataResult" : [-2,-2],
            "rd2Mem": [-3,-3]
        };

        return coordinates[lineName] || defaultFormat;
    } // end function getXYcoordinates(lineName)


    // gets the stage identification.
    // TODO: Replace this mess with a 2D logic table.
    function getStage(lineName) {
        var defaultFormat = "NA";

        switch (lineName) {

            // IF elements
            case "PC":
            case "pcTxt":
            case "pcAluIn":
            case "pcToInstMem":
            case "pcArrow":
            case "pcCircle":
            case "pcAddArrow":
            case "PcAdderResult":
            case "fourAluIn":
            case "fourAluArrow":
            case "fourTxt":
            case "instMemRect":
            case "instMemTxtRead":
            case "instMemTxtAddress":
            case "instMemTxtInst":
            case "instMemTxt31":
            case "instMemTxtIns31":
            case "instMemTxtMem":
            case "pcAluObj1":
            case "pcAluObj2":
            case "pcAluObj3":
            case "pcAluObj4":
            case "pcAluObj5":
            case "pcAluObj6":
            case "pcAluObj7":
            case "addTxt":
            case "instMemLine":
            case "instMemCircle":
            case "addAluToMux":
            case "addAluToMuxArrow":
            case "fourAluToAluTopCircle":
            case "fourAluToAluTopLine":
            case "fourAluToAluTopArrow":
            case "inst":
                return "IF";
                break;

            //ID elements
            case "inst31Txt":
            case "inst31ToCtrl":
            case "inst31Arrow":
            case "inst25Txt":
            case "instToRR1":
            case "inst25Arrow":
            case "inst25Circle":
            case "inst20Txt":
            case "inst20ToCircle":
            case "inst20ToRR2":
            case "inst20MUX0Arrow":
            case "inst20Circle":
            case "inst20ToMux":
            case "inst20MuxArrow":
            case "inst20MuxCircle":
            case "inst15Txt":
            case "inst15ToMux":
            case "inst15Arrow":
            case "inst15Circle":
            case "instDistLine":
            case "inst15To0Txt":
            case "inst15ToSignExt":
            case "inst5ToAluCtrl":
            case "inst5ToAluCtrlArrow":
            case "instToAluCtrlCircle":
            case "registerMux1":
            case "registerMux2":
            case "regMuxTxt0":
            case "regMuxTxtM":
            case "regMuxTxtU":
            case "regMuxTxtX":
            case "regMuxTxt1":
            case "regMuxToRegFileLine":
            case "regMuxToRegFileArrow":
            case "controlEllipse":
            case "controlEllipseTxt":
            case "regDistTxt":
            case "ctrlEllipseToOR":
            case "ctrlEllipseToORText":
            case "ctrlEllipseToDataMem":
            case "ctrlEllipseToDataMemTxt":
            case "ctrlEllToDataMemMux":
            case "ctrlEllToAluOpTxt":
            case "ctrlEllToAluOp":
            case "ctrlEllToMemWriteTxt":
            case "ctrlEllToMemWrite":
            case "ctrlEllToAluSrcTxt":
            case "ctrlEllToAluSrc":
            case "ctrlEllToRegWriteTxt":
            case "ctrlEllToRegWrite":
            case "regFileRect":
            case "regFileRectTxt":
            case "readData1Txt":
            case "readReg2Txt":
            case "readData2Txt":
            case "RD1ToAluResult":
            case "RD1ToAluResultArrow":
            case "RD2ToAluResultCircle":
            case "RD2ToAluResult":
            case "RD2ToAluResultArrow":
            case "signExtEllip":
            case "signExtEllipTxtSign":
            case "signExtEllipTxtExt":
            case "RegFileRD2Circle":
            case "signExtEllToMux1":
            case "Mux1ToShiftLeft2":
            case "Mux1ToShiftLeft2Line":
            case "Mux1ToShiftLeftArrow":
            case "signExt32ToMux1Circle":
            case "signExt32ToMux1Ln":
            case "signExt32ToMux1Arrow":
            case "RR1":
            case "RR2":
            case "RD1":
            case "RD2":
            case "regDst":
            case "branch":
            case "memRead":
            case "memToReg":
            case "aluOp0":
            case "aluOp1":
            case "memWrite":
            case "aluSrc":
            case "regWrite":
            case "signExt32":
            case "intoSignExt16":
            case "intoSignExtArrow16":
            case "signExt16Txt":
            case "signExt16DiagLine":
            case "signExt32Txt":
            case "signExt32DiagLine":
            case "inst5ToAluCtrlTxt":
            case "registerFileLabelTxt":
                return "ID";
                break;

            // EX elements
            case "aluInBot":
            case "aluControlEll":
            case "aluControlEllTxtALU":
            case "aluControlEllTxtCtrl":
            case "aluControlEllToAlu":
            case "aluCtrlOut":
            case "muxIntoAlu1":
            case "muxIntoAlu2":
            case "muxIntoAluBott":
            case "muxIntoAluBottArrow":
            case "muxIntoAluTxt0":
            case "muxIntoAluTxtM":
            case "muxIntoAluTxtU":
            case "muxIntoAluTxtX":
            case "muxIntoAluTxt1":
            case  "mainAlu1":
            case  "mainAlu2":
            case  "mainAlu3":
            case  "mainAlu4":
            case  "mainAlu5":
            case  "mainAlu6":
            case  "mainAlu7":
            case "mainAluTxt0":
            case "mainAluTxtALU":
            case "mainAluTxtALU2":
            case "mainAluTxtResult":
            case 'aluZeroToOrLine':
            case 'shiftLeft2Ell':
            case 'shiftLeft2EllTxtShift':
            case 'shiftLeft2EllTxtLeft2':
            case 'shiftLeft2ToAluIn':
            case 'shiftLeft2ToAluInArrow':
            case 'aluShiftLeft1':
            case 'aluShiftLeft2':
            case 'aluShiftLeft3':
            case 'aluShiftLeft4':
            case 'aluShiftLeft5':
            case 'aluShiftLeft6':
            case 'aluShiftLeft7':
            case 'aluShiftTxtAdd':
            case 'aluShiftTxtAlu':
            case 'aluShiftTxtResult':
            case 'lineAluResult2Mux':
            case 'AluResult2MuxArrow':
            case 'zero':
            case 'aluResult':
            case "shiftLeft2":
            case "PcSl2AddResult":
            case 'aluResultToAddr':
            case 'aluResultToAddrCircle':

                return "EX";
                break;

            // MEM elements
            case 'dataMemRect':
            case 'dataMemRectTxtAdd':
            case 'dataMemRectTxtRead':
            case 'dataMemRectTxtData':
            case 'dataMemRectTxtWrite':
            case 'dataMemRectTxt2Data':
            case 'dataMemRectTxt3Data':
            case 'dataMemRectTxtMem':
            //case 'lineDataMemToMux':
            //case 'DataMemToMuxArrow':
            case 'lineRD2toMemWD':
            case 'lineRD2toMemWDArrow':
            case 'aluResultToAddr1':
            case 'aluResultToAddrArrow':
            case 'lineAluResultToMux0':
            case 'AluResultToMux0Arrow':
            case 'pcAluResultMux':
            case 'pcAluResultMuxTxt0':
            case 'pcAluResultMuxTxtM':
            case 'pcAluResultMuxTxtU':
            case 'pcAluResultMuxTxtX':
            case 'pcAluResultMuxTxt1':
            case 'oRGate':
            case 'lineANDToAluMux':
            case 'lineANDToAluMuxTxtPCSrc':
            case 'aluMuxToPC':
            case 'aluMuxToPCArrow':
            case 'PCSrc':
            case 'newPc':
            case 'aluResultMemVal':
            case 'wdMemReadDataResult':
            case 'rd2Mem':

                return "MEM";
                break;

            // WB elements
            case 'memoryMux':
            case 'memoryMux2':
            case 'memoryMuxTxt1':
            case 'memoryMuxTxtM':
            case 'memoryMuxTxtU':
            case 'memoryMuxTxtX':
            case 'memoryMuxTxt0':
            case 'lineMemMuxToRD':
            case 'MemMuxToRDArrow':
            case "WD":
            case "writeRegTxt":
            case "writeData":
            case 'memoryReadDataResult':
            case "WR" :
            case "lineDataMemToMux":
            case "DataMemToMuxArrow":
                return "WB";
                break;

            default:
                return defaultFormat;
                console.log("getStage something went horribly wrong");
        }

    } // end function getStage(lineName)


    function displayValue(element, anElement, stageClass, datapoint){
        if (debug) {
            console.log("displayElementValues 1st if element i is ", element);
            console.log("displayValue stageClass with the dot is :", stageClass);
            console.log("anElement.mutable is: ", anElement.mutable);

        }
        d3.selectAll("#" + element.toLowerCase())
            .append("text")
            .text(function () {
                if (anElement.mutable){
                    if (debug) {
                        console.log("Disp_Elem_Val IF lower case : ", element.toLowerCase());
                    }
                    return changeType(anElement.val) ;
                }else return anElement.val;
            })
            .attr("class", stageClass +  " mutable");
        d3.select("#" + datapoint).append("text")
            .text((function () {
                if (anElement.mutable){
                    return changeType(anElement.val) ;
                }else return anElement.val;
            }))
            .style("font-size", "9px")
            .attr("id", element)
            .attr("class",  (function () {
                if (anElement.mutable){
                    return (stageClass + " mutable");
                }else return (stageClass + " lineValues");
            }))
            .attr("x", anElement.coordinates[0])
            .attr("y", anElement.coordinates[1]);

    }


    function displayValueGrey (element, anElement, stageClass, datapoint) {
        if (debug) {
            console.log("displayElementValues 2nd if element i is ", element);
        }
        d3.selectAll("#" + element.toLowerCase())
            .append("text")
            .style("color", "lightgrey")
            .text((function () {
                if (anElement.mutable){
                    return changeType(anElement.val) ;
                }else return anElement.val;
            }))
            .attr("class", stageClass + " mutable");
        d3.select("#" + datapoint).append("text")
            .text((function () {
                if (anElement.mutable){
                    return changeType(anElement.val) ;
                }else return anElement.val;
            }))
            .style("font-size", "9px")
            .attr("id", element)
            .attr("class",  (function () {
                if (anElement.mutable){
                    return (stageClass + " mutable");
                }else return (stageClass + " lineValues");
            }))
            .style("fill", "lightgrey")
            .attr("x", anElement.coordinates[0])
            .attr("y", anElement.coordinates[1]);
    }


    // display the element values by stage
    function displayElementValues(datapoint, stageClass) {
        if (debug) {
            console.log("displayLineValues datapoint is :", datapoint);
            console.log("displayLineValues stageClass is :", stageClass);
        }

        switch (datapoint) {
            case "IF":
                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    if (anElement.stage === "IF") {
                        if (anElement.vis && anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0){
                           displayValue(elements[i], anElement, stageClass.slice(1), datapoint);
                        } else if (anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0){
                            displayValueGrey(elements[i], anElement, stageClass.slice(1), datapoint);
                        }
                    }
                }
                break;

            case "ID":
                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    if (anElement.stage === "ID") {
                        if (anElement.vis && anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0) {
                            displayValue(elements[i], anElement, stageClass.slice(1), datapoint);
                        } else if (anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0){
                            displayValueGrey(elements[i], anElement, stageClass.slice(1), datapoint);
                        }
                    }
                }
                break;

            case "EX":
                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    if (anElement.stage == "EX") {
                        if (anElement.vis && (anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0)) {
                            displayValue(elements[i], anElement, stageClass.slice(1), datapoint);
                        } else if (anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0){
                            displayValueGrey(elements[i], anElement, stageClass.slice(1), datapoint);
                        }
                    }
                }
                break;

            case "MEM":

                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    if (anElement.stage == "MEM") {
                        if (anElement.vis && anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0) {
                            displayValue(elements[i], anElement, stageClass.slice(1), datapoint);
                        } else if (anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0) {
                            displayValueGrey(elements[i], anElement, stageClass.slice(1), datapoint);
                        }
                    }
                }
                break;

            case "WB":
                for (var i = 0; i < elements.length; i++) {
                    var anElement = mipsValues[elements[i]];
                    if (anElement.stage == "WB") {
                        if (anElement.vis && anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0) {
                            displayValue(elements[i], anElement, stageClass.slice(1), datapoint);
                        } else if (anElement.coordinates[0] !== 0 && anElement.coordinates[1] !== 0) {
                            displayValueGrey(elements[i], anElement, stageClass.slice(1), datapoint);
                        }
                    }
                }
                break;

            default:
                console.log("displayElementValues: something went horribly wrong");

        }
    }


    // gets the data (values) for element
    function getElementData(lineName, LineNumber) {
        var tempArgs = CurrentLine["args"];

        switch (lineName) {
            case "PC":
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
                    console.log("inst5ToAluCtrl: ", CurrentLine["assembledInstruction"].slice(-8, -1));
                }
                return CurrentLine["assembledInstruction"].slice(-8, -1);
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

                if (debug) {
                    console.log("getElementData: ", lineName);
                }
                return control(lineName);
                break;

            // TODO: Need logic here to set these lines by
            case"RR1":
                //console.log("in RR1: ", allRegs [MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(7, 12))]);
                return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(7, 12))];
                break;

            case"RR2":
                //console.log("in RR1: ", allRegs [MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))]);
                return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))];
                break;

            case"WR":
                if ((mipsValues[elements[9]].val) === "0") {
                    return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))];
                } else {
                    return allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(19, 24))];
                }
                break;

            case"WD":
                if ((mipsValues[elements[28]].val) === "0") {
                    return mipsValues[elements[18]].val;
                } else {
                    return mipsValues[elements[27]].val;
                }
                break;

            case"RD1":
                var regValue = allRegisterValues[allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(7, 12))]];
                return MIPS.numberToBinaryString(regValue.val, 32);
                break;

            case"RD2":
            case "rd2Mem":
                var regValue = allRegisterValues[allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))]];
                return MIPS.numberToBinaryString(regValue.val);
                break;

            case "signExt32":
                try {
                    var regValue =  MIPS.binaryStringToNumber(CurrentLine["assembledInstruction"].slice(19, -1));
                        if (debug) {
                        console.log("SignExt32 regValue is: ", regValue);
                        console.log("SignExt32 regValue sign extended to 32: ", MIPS.numberToBinaryString(regValue, 32));
                        }
                    return MIPS.numberToBinaryString(regValue, 32);
                } catch (error) {
                    console.log("Something went wrong in signExt32 " + error);
                }
                break;

            case "aluInBot":
                if ((mipsValues[elements[10]].val) == "0") {
                    var regValue = allRegisterValues[allRegs[MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(13, 18))]];
                    return MIPS.numberToBinaryString(regValue.val);
                } else {
                    try {
                        var regValue = MIPS.binaryStringToNumber(CurrentLine["assembledInstruction"].slice(19, -1));
                        return MIPS.numberToBinaryString(regValue, 32);
                    } catch (error) {
                        console.log("Something went wrong in aluInBot " + error);
                    }
                }
                break;

            case "aluCtrlOut":
                var AluOp0 = mipsValues[elements[11]].val;
                var AluOp1 = mipsValues[elements[12]].val;
                var Inst5ToALUCtr = mipsValues[elements[13]].val;
                    if (debug){
                    console.log("Validate values AluOp0: ", AluOp0);
                    console.log("Validate values AluOp1: ", AluOp1);
                    console.log("Validate values Inst5ToALUCtr: ", Inst5ToALUCtr.slice(-5));
                    console.log("Validate values Inst5ToALUCtr no slice: ", Inst5ToALUCtr);}
                return getAluControl (AluOp0, AluOp1, Inst5ToALUCtr.slice(-5));
                break;


            case "aluResult":
            case "aluResultMemVal":
            {
                var Rd1 = mipsValues[elements[14]].val;
                var AluInBott = mipsValues[elements[15]].val;
                var AluOpCode = mipsValues[elements[16]].val;
                    if (debug) {
                    console.log("getElementData aluResult Rd1 is ", Rd1);
                    console.log("getElementData aluResult AluInBott is ", AluInBott);
                    console.log("getElementData aluResult AluOpCode is ", AluOpCode);}
                return getAluResult(Rd1, AluInBott, AluOpCode);
            }
                break;

            case "PCSrc":
                var zero = mipsValues[elements[17]].val;
                var branch = mipsValues[elements[19]].val;
                if (debug) {
                    console.log("PCSrc zero is ", zero);
                    console.log("PCSrc branch is ", branch);
                }
                if (zero == "0" && branch == "0" || zero == "1" && branch == "0" || zero == "0" && branch == "1" ) {
                    return "0";
                } else {
                    return "1";
                }
                break;

            case "PcAdderResult":
                var top = mipsValues[elements[0]].val;
                var bottom = "00000000000000000000000000000100";
                return getAluAddResult(top, bottom);
                break;

            case "shiftLeft2":
                var temp = MIPS.binaryStringToNumber(mipsValues[elements[23]].val) << 2;
                return MIPS.numberToBinaryString(temp, 32);
                break;


            case "PcSl2AddResult":
                var AluInTop = mipsValues[elements[21]].val;
                var AluInBott = mipsValues[elements[24]].val;
                if (debug) {
                    console.log("PcSl2AddResult AluInTop is: ", AluInTop);
                    console.log("PcSl2AddResult AluInBott is ", AluInBott);}
                return getAluAddResult(AluInTop, AluInBott);
                break;

            case "newPc":
                if ((mipsValues[elements[20]].val) == "0") {
                    return mipsValues[elements[21]].val;
                } else {
                    return mipsValues[elements[25]].val;
                }
                break;

            case "memoryReadDataResult":
            case "wdMemReadDataResult":
                try {
                    var temp = MIPS.binaryStringToNumber(mipsValues[elements[18]].val);
                    var getAddrVal = "#stackEntry-" + (temp + 3);  //offset from stack display error
                    var temps = d3.select(getAddrVal).text();
                    var fields = temps.split(/:/);
                    var memWriteData = fields[2];
                    memWriteData = memWriteData * 1;
                    return MIPS.numberToBinaryString(memWriteData, 32);
                } catch (error){
                    return "00000000000000000000000000000000";
                }
                break;
            case "inst":
                var str = mipsValues[elements[8]].val + mipsValues[elements[31]].val + mipsValues[elements[32]].val + mipsValues[elements[22]].val;
                str = str.replace(/\s+/g, '')
                return (str);
                break;

            default : return null;
        }
    }


    // gets the ALU Control signal result
    function getAluControl (AluOp0, AluOp1, Inst5ToALUCtr) {
        if (debug) {
        console.log ("getAluControl AluOp0 is: ", AluOp0);
        console.log ("getAluControl AluOp1 is: ", AluOp1);
        }
            try {
                var strValue = MIPS.binaryStringToNumber(Inst5ToALUCtr);
            }catch (error){
                console.log("Something went wrong in getAluControl: " + error);
            }

            if (debug){
            console.log ("getAluControl Inst5ToALUCtr: ", Inst5ToALUCtr);
            console.log ("getAluControl strValue: ", strValue);}

            if (AluOp0 == "0"  && AluOp1 == "0") {
                // Adding
                return "0010";

            } else if (AluOp1 == "1") {
                // Subtracting
                return "0110";

            } else if (AluOp0 == "1"){
                    switch (strValue) {
                        case 0:
                            // ADD
                            return "0010";
                            break;
                        case 2:
                            // Subtracting
                            return "0110";
                            break;
                        case 4:
                            // AND
                            return "0000";
                            break;
                        case 5:
                            // OR
                            return "0001";
                            break;
                        case 10:
                            // SetLessThan: SLT
                            return "0111";
                            break;
                        default : console.log ("getAluControl: Oops something broke!");

                    }
            }
    }


    // gets the output result of the ALU and sets the zero line.
    function getAluResult (Rd1, AluInBott, AluOpCode){
        switch (AluOpCode) {
            // AND
            case "0000":
                var sum = Rd1 & AluInBott;
                if (sum === 0) {
                    mipsValues[elements[17]].val = "1";
                }else {
                    mipsValues[elements[17]].val = "0";
                }
                return MIPS.numberToBinaryString(sum,32);
                break;

            // OR
            case "0001":
                var sum = Rd1 | AluInBott;
                if (sum === 0) {
                    mipsValues[elements[17]].val = "1";
                }else {
                    mipsValues[elements[17]].val = "0";
                }
                return MIPS.numberToBinaryString(sum,32);
                break;

            //ADD
            case "0010":
                var sum = MIPS.binaryStringToNumber(Rd1) + MIPS.binaryStringToNumber(AluInBott);
                if (sum === 0) {
                    mipsValues[elements[17]].val = "1";
                }else {
                    mipsValues[elements[17]].val = "0";
                }
                return MIPS.numberToBinaryString(sum,32);
                break;

            //SUB
            case "0110":
                var sum = MIPS.binaryStringToNumber(Rd1) - MIPS.binaryStringToNumber(AluInBott);
                if (sum === 0) {
                    mipsValues[elements[17]].val = "1";
                }else {
                    mipsValues[elements[17]].val = "0";
                }
                return MIPS.numberToBinaryString(sum,32);
                break;

            // SLT: Set Less Than
            case "0111":
                var temp = MIPS.binaryStringToUnsignedNumber(Rd1) < MIPS.binaryStringToUnsignedNumber(AluInBott);
                if (temp === 0) {
                    mipsValues[elements[17]].val = "1";
                }else {
                    mipsValues[elements[17]].val = "0";
                }
                return MIPS.numberToBinaryString(temp,32);
                break;

            default : console.log("getAluResult: Invalid ")
        }


    }


    // gets the output result of the Add ALU.
    function getAluAddResult (aluInTop, aluInBott){
        var sum = MIPS.binaryStringToUnsignedNumber(aluInTop) + MIPS.binaryStringToUnsignedNumber(aluInBott);
        return MIPS.numberToBinaryString(sum,32);
    }


    // sets all control line values.
    function control(lineName) {
        if (debug) {
            console.log("function control opcode: ", MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)));
        }
        if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 0) {
            // R format math
            for (var i = 0; i < elements.length; i++) {
                var tempElement = elements[i];

                if (tempElement === lineName) {
                    switch (lineName) {
                        case "regDst":
                        case "aluOp0":
                        case "regWrite":
                            return "1";
                            break;
                        case "jump":
                        case "branch":
                        case "memRead":
                        case "memToReg":
                        case "aluOp1":
                        case "memWrite":
                        case "aluSrc":
                            return "0";
                            break;
                    }
                }
            }
        } else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 35) {
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
        else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 43) {
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
        else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) === 4) {
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
        else if (MIPS.binaryStringToUnsignedNumber(CurrentLine["assembledInstruction"].slice(0, 6)) == 2) {
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
        } else {
            console.log("Invalid OpCode")
        }
    }


    // Print to console the data from mips_emulator.js
    if (debug) {
        // TODO: need CurrentLine accessor function written for mips_emulator.js
        var temp = CurrentLine["args"];
        // TODO: need registers accessor function written for mips_emulator.js
        console.log("is registers global? ", allRegisterValues[temp[0]]);
        console.log("mipsValues array is :", mipsValues);
        console.log("the value of CurrentLine in visual_mips_original.html is :", CurrentLine);
        console.log("CurrentLine['assembledInstruction'] in visual_mips_original.html is :", CurrentLine["assembledInstruction"]);
        var opCode = CurrentLine["assembledInstruction"].slice(0, 6);
        console.log("This is the opCode: ", opCode);
        console.log("this is CurrentLine['args']: ", temp[0]);
    }


    // Makes visible the lines and values in the stage based on the mips instruction.
    function drawVisableLines (someClass, someStage) {
        var inData = d3.selectAll(someClass);               // collect all memebers of the class
        var theElementId = inData[[0]];
        for (var i = 0; i < elements.length; i++) {
            var Btemp = mipsValues[elements[i]];        // access a specific element

            if (Btemp.stage === someStage) {  //Limit the number of times the inner loop runs
                for (var j = 0; j < theElementId.length; j++) {
                    if ((elements[i] === theElementId[j].id) && Btemp.vis) {
                        if (someClass === ".ifetch" || someClass === ".idecode" || someClass === ".excode"
                            || someClass === ".wbcode" || someClass === ".memcode" ) {
                            (d3.select(theElementId[j])
                                    .transition()
                                    .style('opacity', 1)
                                    .duration(1500)
                                    .style("fill", "black")
                            );

                        } else if (someClass === ".ifetchObj" || someClass === ".idecodeObj" || someClass === ".excodeObj"
                                    || someClass === ".wbcodeObj" || someClass === ".memcodeObj" ) {
                                    (d3.select(theElementId[j])
                                            .transition()
                                            .style('opacity', 1)
                                            .duration(1500)
                                            .style("stroke", "black")
                                    );

                                } else if (someClass === ".idtorq" || someClass === ".wbtorq" || someClass === ".extorq"
                                        || someClass === ".memtorq" ){
                                        (d3.selectAll(someClass)
                                                .transition()
                                                .style('opacity', 1)
                                                .duration(1500)
                                                .style("fill", "turquoise")
                                        );

                                        } else if (someClass === ".idtorqObj" || someClass === ".wbtorqObj" || someClass === ".extorqObj"
                                                || someClass === ".memtorqObj" ) {
                                                    (d3.selectAll(someClass)
                                                        .transition()
                                                        .style('opacity', 1)
                                                        .duration(1500)
                                                        .style("stroke", "turquoise")
                                                        .style("fill", "none")
                                                    );
                                                }


                    }
                }
            }
        }
    }


    // Create the pipeline stage buttons & uses data from dataKeys to name the buttons
    // TODO: convert this code into a function
    if (CurrentLine["lineNo"] != previousLine) {

        d3.select("#modal-buttons").selectAll("button.teams").data(dataKeys).enter()
            .append("button")
            .attr("class", "stage-buttons")
            .attr("text-align", "center")
            .on("click", buttonClick)
            .html(function (d) {
                return d
            });

        d3.select("#stageTabs").selectAll("button.teams").data(stageKeys).enter()
            .append("li")
            .attr("class", (function (d) {
                if (d == "Reset"){
                    return "active";
                }
            }))
            .append("a")
            .attr("id",(function (d) {
                return ("tab-" + d.toLowerCase())
            }))
            .attr("class", "stage-tabs")
            .attr("href", (function (d) {
                return ("#" + d.toLowerCase())
            }))
            .attr("data-toggle", "tab")
            .on("click", buttonClick)
            .html(function (d) {
                return d
            });

    }

    // detect a change in the displayed data type and make the change.
    d3.select("#stageDisplayType").on("change", (function () {
        newFormat = $("#stageDisplayType option:selected").html().toLowerCase();
        if (debug) {
            console.log("NEWFORMAT is: ", newFormat);
            console.log("CURRENTFORMAT is: ", currentFormat);
        }
        d3.selectAll(".mutable").text(function (d) {
            return changeRep(this.innerHTML);
        });

        currentFormat = newFormat;
    }));


    // convert a data type to Hexadecimal.
    function asHex (v, currentFormat) {
        if (currentFormat == "binary"){
            var intNum = MIPS.binaryStringToUnsignedNumber(v);
            if(debug) {
                console.log("asHex input value ", v);
                console.log("asHex intNum is ", intNum);
            }
            return "0x" + intNum.toString(16);

        }else {
            var asText = v * 1;
            return "0x" + asText.toString(16);
        }

    }


    // Convert a current data type into a the new format data type.  The formats are binary, hex or decimal.
    function changeRep(v) {
        var newFormat = $("#stageDisplayType option:selected").html().toLowerCase();
        if (debug) {
            console.log("change rep NEWFORMAT is: ", newFormat);
            console.log("change rep CURRENTFORMAT is: ", currentFormat);
        }
            switch (currentFormat) {
                case "binary":
                    switch (newFormat) {
                        case "decimal":
                            return MIPS.binaryStringToUnsignedNumber(v);
                            break;
                        case "hex":
                            return asHex(v, currentFormat);
                            break;
                        default:
                            return v;
                    }
                    break;
                case "decimal":
                    switch (newFormat) {
                        case "binary":
                            return (parseInt(v).toString(2));
                            break;
                        case "hex":
                            return asHex(v, currentFormat);
                            break;
                        default:
                            return v;
                    }
                    break;
                case "hex":
                    switch (newFormat) {
                        case "binary":
                            return (parseInt(v).toString(2));
                            break;
                        case "decimal":
                            return parseInt(v);
                            break;
                        default:
                            return v;
                    }
                    break;
                default:
                    console.log("Something went horribly wrong in changeRep");
            }
    }


    // convert the binary to the selected type: integer or hex.
    function changeType(v) {
        var newType = $("#stageDisplayType option:selected").html().toLowerCase();
        if (debug) {
            console.log("change Type NEWTYPE is: ", newType);
        }
        switch (newType) {
            case "decimal":
                return MIPS.binaryStringToUnsignedNumber(v);
                break;
            case "hex":
                var intNum = MIPS.binaryStringToUnsignedNumber(v);
                if (debug) {
                    console.log("asHex intNum is ", intNum);
                    console.log("asHex HEX is ", "0x" + intNum.toString(16));
                }
                return "0x" + intNum.toString(16);
                break;
            default:
                return v;
        }
    }


    // Set data path elements to black: not used, future use?
    function setBlack (someClass){
        done =  (d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("fill", "black")
        +
        d3.selectAll(someClass + "Obj")
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("stroke", "black"));
        return done
    }


    // Set data path elements to grey
    function setGrey (someClass){
        done =  (d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("fill", "lightgrey")
        +
        d3.selectAll(someClass + "Obj")
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("stroke", "lightgrey"));
        return done
    }


    // Set data path elements to turquoise: not used, future use?
    function setTorq (someClass){
        done =  (d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("fill", "turquoise")
        +
        d3.selectAll(someClass + "Obj")
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("stroke", "turquoise"));
        return done
    }


    // Set data path elements that are normally turquoise to grey.
    function setTorqGrey (someClass){
        done =  (d3.selectAll(someClass)
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("fill", "lightgrey")
        +
        d3.selectAll(someClass + "Obj")
            .transition()
            .style('opacity', 1)
            .duration(1)
            .style("stroke", "lightgrey"));
        return done
    }


    // Toggle each section between color view and light grey view each time a button is clicked
    // or view all as light grey when "RESET" is clicked.  "PLAY" advances each section then resets to grey.
    function buttonClick(datapoint) {
        var stageClass = " ";
        if(datapoint === "IF" && iftoggle === 0) {
            stageClass = ".ifetch";
            iftoggle = iftoggle + 1;
            drawVisableLines (stageClass, datapoint);
            drawVisableLines (stageClass + "Obj", datapoint);
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint === "IF" && iftoggle === 1){
            iftoggle = iftoggle - 1;
            d3.selectAll(".ifetch.mutable").remove();
            d3.selectAll(".ifetch.lineValues").remove();
            return setGrey(".ifetch")
        }

        if (datapoint === "ID" && idtoggle === 0) {
            stageClass = ".idecode";
            idtoggle = idtoggle + 1;
            drawVisableLines (stageClass, datapoint);
            drawVisableLines (stageClass + "Obj", datapoint);
            drawVisableLines (".idtorq", datapoint);
            drawVisableLines ((".idtorq" + "Obj"), datapoint);
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint == "ID" && idtoggle == 1){
            idtoggle = idtoggle - 1;
            d3.selectAll(".idecode.mutable").remove();
            d3.selectAll(".iedcode.lineValues").remove();
            return (setGrey(".idecode") + setTorqGrey(".idtorq"));
        }

        if (datapoint === "EX" && extoggle === 0) {
            stageClass = ".excode";
            extoggle = extoggle + 1;
            drawVisableLines (stageClass, datapoint);
            drawVisableLines (stageClass + "Obj", datapoint);
            drawVisableLines (".extorq", datapoint);
            drawVisableLines ((".extorq" + "Obj"), datapoint);
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint == "EX" && extoggle == 1){
            extoggle = extoggle - 1;
            d3.selectAll(".excode.mutable").remove();
            d3.selectAll(".excode.lineValues").remove();
            return (setGrey(".excode") + setTorqGrey(".extorq"));
        }

        if (datapoint === "MEM" && memtoggle === 0) {
            stageClass = ".memcode";
            memtoggle = memtoggle + 1;
            drawVisableLines (stageClass, datapoint);
            drawVisableLines (stageClass + "Obj", datapoint);
            drawVisableLines (".memtorq", datapoint);
            drawVisableLines ((".memtorq" + "Obj"), datapoint);
            return displayElementValues(datapoint, stageClass);
        }
        if(datapoint === "MEM" && memtoggle === 1){
            memtoggle = memtoggle - 1;
            d3.selectAll(".memcode.mutable").remove();
            d3.selectAll(".memcode.lineValues").remove();
            return (setGrey(".memcode") + setTorqGrey(".memtorq"));
        }

        if (datapoint === "WB" && wbtoggle === 0) {

            stageClass = ".wbcode";
            wbtoggle = wbtoggle + 1;
            drawVisableLines (stageClass, datapoint);
            drawVisableLines (stageClass + "Obj", datapoint);
            drawVisableLines (".wbtorq", datapoint);
            drawVisableLines ((".wbtorq" + "Obj"), datapoint);
            return displayElementValues(datapoint, stageClass);
        }

        if(datapoint === "WB" && wbtoggle === 1){
            wbtoggle = wbtoggle - 1;
            d3.selectAll(".wbcode.mutable").remove();
            d3.selectAll(".wbcode.lineValues").remove();
            return (setGrey(".wbcode") + setTorqGrey(".wbtorq"));
        }

        if(datapoint === "Reset"){
            var blackSection = [".ifetch",".idecode", ".excode", ".memcode", ".wbcode"];
            var turqSection = ["iftorq", ".idtorq", ".extorq", ".memtorq", ".wbtorq"];
            blackSection.forEach(setGrey);
            turqSection.forEach(setTorqGrey);
            d3.select("#reset").attr("class", "active");
            d3.selectAll(".lineValues").remove();
            d3.selectAll(".immutable").remove();
            d3.selectAll(".mutable").remove();
            iftoggle = 0;
            idtoggle = 0;
            extoggle = 0;
            memtoggle = 0;
            wbtoggle = 0;
            if (debug) {
                console.log("RESET currentFormat is ", currentFormat);
                console.log("RESET newFormat is ", newFormat);
            }
        }

        if(datapoint === "All"){
            buttonClick("Reset");
            var stage = ["IF", "ID", "EX", "MEM", "WB"];
            var blackSection = [".ifetch",".idecode", ".excode", ".memcode", ".wbcode"];
            var turqSection = ["iftorq", ".idtorq", ".extorq", ".memtorq", ".wbtorq"];
            var i = 0;
            blackSection.forEach(setGrey);
            turqSection.forEach(setTorqGrey);
            d3.selectAll(".lineValues").remove();
            d3.selectAll(".immutable").remove();
            d3.selectAll(".mutable").remove();
            function myLoop () {
                setTimeout(function () {
                    drawVisableLines (blackSection[i], stage[i]);
                    drawVisableLines (blackSection[i] + "Obj", stage[i]);
                    drawVisableLines (turqSection[i], stage[i]);
                    drawVisableLines ((turqSection[i] + "Obj"), stage[i]);
                    displayElementValues(stage[i], blackSection[i]);
                    i++;
                    if (i < 5) {
                        myLoop();
                    }
                }, 1)
            }
            myLoop();
            iftoggle = 1;
            idtoggle = 1;
            extoggle = 1;
            memtoggle = 1;
            wbtoggle = 1;
        }

        if(datapoint == "Close") {
            // remove all data path values, instruction data, tab labels & data.
            d3.select("#if").attr("class", "tab-pane");
            d3.select("#id").attr("class", "tab-pane");
            d3.select("#ex").attr("class", "tab-pane");
            d3.select("#mem").attr("class", "tab-pane");
            d3.select("#wb").attr("class", "tab-pane");
            d3.select("#all").attr("class", "tab-pane");
            d3.selectAll(".lineValues").remove();
            d3.selectAll(".immutable").remove();
            d3.selectAll(".initialize").remove();
            d3.selectAll(".stage-buttons").remove();
            d3.selectAll(".stage-tabs").remove();
            d3.selectAll(".mutable").remove();
            previousLine = CurrentLine["lineNo"];
            iftoggle = 0;
            idtoggle = 0;
            extoggle = 0;
            memtoggle = 0;
            wbtoggle = 0;
            // Disable the visualize button to prevent re-entering the visualization for a given MIPS instruction.
            document.getElementById('visualize').disabled = true;
            var blackSection = [".ifetch",".idecode", ".excode", ".memcode", ".wbcode"];
            var turqSection = ["iftorq", ".idtorq", ".extorq", ".memtorq", ".wbtorq"];
                blackSection.forEach(setGrey);
                turqSection.forEach(setTorqGrey);
            // reset data type options selections box to binary
            $("#stageDisplayType").prop('selectedIndex',0);
            buttonClick("Reset");
            // hide the modal window and invalidate all data.
            $("#myModal").modal("hide").data( 'bs.modal', null );

        }
    }


    if (debug) {
        console.log("Close CurrentlLine['lineNo:'] ",CurrentLine["lineNo"]);
        console.log("testing value of elements: ", mipsValues[elements[15]].val);
        console.log("This is the mipsValues: ", mipsValues);
    }
}