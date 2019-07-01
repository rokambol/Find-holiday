/*
        $('#inlineFormCustomSelect').on('change', function() {
            var value = $('#inlineFormCustomSelect').val();

            // #inlineFormCustomSelect value ==1
            if (value == 1) {
                newLocation(49.020956, -103.076235);
                markerSet();
                
                // load #subMenu with variables on the list according to value
                subMenu.empty();
                
                var cities = data.areas.cities
                
                
                subMenu.append(childLi1);
                
                
                listMenu.empty();

                subMenu.on('change', function() {
                    var valueSub = subMenu.val();
                    if (valueSub == 1) {
                        newLocation(38.893558, -77.063383);
                        listMenu.empty();
                        // load #subMenu1 with array index according to value
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                map.setZoom(11);
                                listMenu.empty();
                                var attractions = 
                                listMenu.append(renderAttractions(attractions));
                              // markerAttr();
                                
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[1]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[2]);
                            }
                        });
                    }
                    else if (valueSub == 2) {
                        newLocation(40.773882, -74.019295);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[3]);
                                markerAttr();
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[4]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[5]);
                            }
                        });
                    }
                    else if (valueSub == 3) {
                        newLocation(43.697069, -79.383891);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[6]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[7]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[8]);
                            }
                        });
                    }
                    else if (valueSub == 4) {
                        newLocation(45.605755, -73.538326);
                        empty;
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[9]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[10]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[11]);
                            }
                        });
                    }
                    else if (valueSub == 5) {
                        newLocation(46.867889, -71.226519);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[12]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[13]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[14]);
                            }
                        });
                    }
                    else if (valueSub == 6) {
                        newLocation(49.384010, -123.156729);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[15]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[16]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[17]);
                            }
                        });
                    }
                });

                // #inlineFormCustomSelect value == 2
            }
            else if (value == 2) {
                newLocation(-33.139444, -65.501989);
                markerSet();
                subMenu.empty();
                subMenu.append(childLi2);
                subMenu.on('change', function() {
                    var valueSub = subMenu.val();
                    if (valueSub == 7) {
                        newLocation(-22.922876, -43.462457);
                        listMenu.empty();
                        // load #subMenu1 with array index according to value
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[18]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[19]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[20]);
                            }
                        });
                    }
                    else if (valueSub == 8) {
                        newLocation(-34.604760, -58.426976);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[21]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[22]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[23]);
                            }
                        });
                    }
                    else if (valueSub == 9) {
                        newLocation(-34.902597, -56.172354);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[24]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[25]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[26]);
                            }
                        });
                    }
                    else if (valueSub == 10) {
                        newLocation(-51.746976, -58.910415);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[27]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[28]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[29]);
                            }
                        });
                    }
                    else if (valueSub == 11) {
                        newLocation(-53.763299, -67.696776);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[30]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[31]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[32]);
                            }
                        });
                    }
                    else if (valueSub == 12) {
                        newLocation()
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[33]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[34]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[35]);
                            }
                        });
                    }
                });

                // #inlineFormCustomSelect value ==3
            }
            else if (value == 3) {
                newLocation(50.720127, 16.191343);
                markerSet(-33.439446, -70.667641);
                subMenu.empty();
                subMenu.append(childLi3);
                subMenu.on('change', function() {
                    var valueSub = subMenu.val();
                    if (valueSub == 13) {
                        newLocation(51.409136, -0.062758);
                        listMenu.empty();
                        // load #subMenu1 with array index according to value
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 7) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[36]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[37]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[38]);
                            }
                        });
                    }
                    else if (valueSub == 14) {
                        newLocation(48.856871, 2.335072);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[39]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[40]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[41]);
                            }
                        });
                    }
                    else if (valueSub == 15) {
                        newLocation(55.678157, 12.578024);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[42]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[43]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[44]);
                            }
                        });
                    }
                    else if (valueSub == 16) {
                        newLocation(55.754242, 37.599643);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[45]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[46]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[47]);
                            }
                        });
                    }
                    else if (valueSub == 17) {
                        newLocation(41.901298, 12.488610);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[48]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[49]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[50]);
                            }
                        });
                    }
                    else if (valueSub == 18) {
                        newLocation(37.996834, 23.725499);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[51]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[52]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[53]);
                            }
                        });
                    }
                });


                // #inlineFormCustomSelect value == 4
            }
            else if (value == 4) {
                newLocation(3.575398, 23.046812);
                markerSet();
                subMenu.empty();
                subMenu.append(childLi4);
                subMenu.on('change', function() {
                    var valueSub = subMenu.val();
                    if (valueSub == 19) {
                        newLocation(33.575700, -7.593175);
                        listMenu.empty();
                        // load #subMenu1 with array index according to value
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[54]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[55]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[56]);
                            }
                        });
                    }
                    else if (valueSub == 20) {
                        newLocation(30.019941, 31.209710);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[57]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[58]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[59]);
                            }
                        });
                    }
                    else if (valueSub == 21) {
                        newLocation(6.526206, 3.374584);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[60]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[61]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[62]);
                            }
                        });
                    }
                    else if (valueSub == 22) {
                        newLocation(-26.199541, 28.044828);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[63]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[64]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[65]);
                            }
                        });
                    }
                    else if (valueSub == 23) {
                        newLocation(-33.932501, 18.455402);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[66]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[67]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[68]);
                            }
                        });
                    }
                    else if (valueSub == 24) {
                        newLocation(0.052616, 32.464036);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[69]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[70]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[71]);
                            }
                        });
                    }

                });
                // #inlineFormCustomSelect value == 5
            }
            else if (value == 5) {
                newLocation(29.168012, 103.906187);
                markerSet();
                subMenu.empty();
                subMenu.append(childLi5);
                subMenu.on('change', function() {
                    var valueSub = subMenu.val();
                    if (valueSub == 25) {
                        newLocation(25.215561, 55.273019);
                        listMenu.empty();
                        // load #subMenu1 with array index according to value
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[72]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[73]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[74]);
                            }
                        });
                    }
                    else if (valueSub == 26) {
                        newLocation(19.084794, 72.883234);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[75]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[76]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[77]);
                            }
                        });
                    }
                    else if (valueSub == 27) {
                        newLocation(6.926264, 79.861009);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[78]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[79]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[80]);
                            }
                        });
                    }
                    else if (valueSub == 28) {
                        newLocation(3.137818, 101.689046);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[81]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[82]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[83]);
                            }
                        });
                    }
                    else if (valueSub == 29) {
                        newLocation(22.337251, 114.183957);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[84]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[85]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[86]);
                            }
                        });
                    }
                    else if (valueSub == 30) {
                        newLocation(35.710376, 139.732444);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[87]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[88]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[89]);
                            }
                        });
                    }
                });

                // #inlineFormCustomSelect value == 6
            }
            else if (value == 6) {
                newLocation(-34.397, 150.644),
                    markerSet();
                subMenu.empty();
                subMenu.append(childLi6);
                subMenu.on('change', function() {
                    var valueSub = subMenu.val();
                    if (valueSub == 31) {
                        newLocation(-32.023278, 115.892434);
                        listMenu.empty();
                        // load #subMenu1 with array index according to value
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[90]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[91]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[92]);
                            }
                        });
                    }
                    else if (valueSub == 32) {
                        newLocation(-37.817348, 144.940379);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[93]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[94]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[95]);
                            }
                        });
                    }
                    else if (valueSub == 33) {
                        newLocation(-33.864985, 151.185559);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[96]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[97]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[98]);
                            }
                        });
                    }
                    else if (valueSub == 34) {
                        newLocation(-45.050422, 168.720692);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[99]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[100]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[101]);
                            }
                        });
                    }
                    else if (valueSub == 35) {
                        newLocation(-36.870763, 174.697222);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[102]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[103]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[104]);
                            }
                        });
                    }
                    else if (valueSub == 36) {
                        newLocation(-17.757309, 177.445846);
                        listMenu.empty();
                        $('#subMenu1').on('change', function() {
                            var valueSub1 = $('#subMenu1').val();
                            if (valueSub1 == 1) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[105]);
                            }
                            else if (valueSub1 == 2) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[106]);
                            }
                            else if (valueSub1 == 3) {
                                listMenu.empty();
                                listMenu.append(listmenuItems[107]);
                            }
                        });
                    }
                });

                // back to coordinate in unitMap()
            }
            else {
                newLocation(23.658426, -31.762902), markerSet();
            }
        });
        */
        /* json rendering 
        
        var map = null;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 23.658426, lng: -31.762902 },
        zoom: 2
    });
}

$.getJSON('data/places.json', function (data) {
    console.log(data);
    
    // JQuery function help code below to execute after page is loaded 
    $(document).ready(function() {
        var citySelect =  $('#citySelect');
        var listMenu = $('#listMenu');
        var placesTypeSelect = $('#placesTypeSelect');
        var continentSelect = $('#continentSelect');
        var selectedCity = null;
        var selectedContinent = null;
        // var list = listmenuItems[0].attractions;

        // set marker on the Map 
         function markerSet() {
             var infowindow = new google.maps.InfoWindow();
             var marker, i;
             for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                     position: new google.maps.LatLng(
                         locations[i][1],
                         locations[i][2]
                    ),
                     map: map
                 });
                 google.maps.event.addListener(
                     marker,
                     'click',
                     (function(marker, i) {
                         return function() {
                            infowindow.open(map, marker);
                             infowindow.setContent(picCity[i][0]);
                         };
                     })(marker, i)
                 );
            }
        }
        
        function renderCityInfo(cityDetails) {
            return `
                <div class="pic">
                <img src="${cityDetails.picture}">
                </div>
                <div class= 'text'>
                    <b>${cityDetails.cityName}</b>
                    <br/>Country: ${cityDetails.country}
                    <br/>Population: ${cityDetails.population}
                </div>
            `;
        }
        
        function markerSet(place) {
            var marker = new google.maps.Marker({
                position: {lat: place.location[0], lng: place.location[1]},
                map: map
            });
            if (place.hasOwnProperty('cityDetails')) {
                var infowindow = new google.maps.InfoWindow({
                    content: renderCityInfo(place.cityDetails)
                });
                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });   
            }
        }
     
        
       
        
        function newLocation(newLat, newLng) {
            map.setCenter({
                lat: newLat,
                lng: newLng
            });
        }

        function setLocationAndZoom(place) {
            map.setCenter({
                lat: place.location[0],
                lng: place.location[1]
            });
            map.setZoom(place.zoom);
            makerSet(place);
        }
        
        function renderAttractions(attractions) {
            return '<h2>Our recommendation:</h2>' +
                '<ul><li>' + attractions.join('</li><li>') + '</li></ul>';
        }
        
        function optionsRender(options, $selectElement) {
            $selectElement.append(
                $('<option></option>')
                    .attr('selected', 'selected')
                    .text('Choose...')
            );
            options.forEach(function(element) {
                $selectElement.append($('<option></option>')
                    .attr('value', element.id)
                    .text(element.text)); 
            });
        }
        
        function renderContinents(continents, $selectElement) {
            optionsRender(continents.map((d) => {
                d.text = d.continentName;
                d.id = d.continentId;
                return d;
            }), $selectElement);
        }
        
        function renderCities(cities, $selectElement) {
            optionsRender(cities, $selectElement);
        }
        
        function getPlacesType(value) {
            if (value === 1) {
                return 'attractions';
            }
            else if (value === 2) {
                return 'hotels';
            }
            return 'restaurants';
        }
        
        // set different zoom on each map
        renderContinents(data, continentSelect);
        
        
        continentSelect.on('change', function() {
            placesTypeSelect.val(0);
            citySelect.empty();
            listMenu.empty();
            selectedCity = null; // reset the selected city
            var value = parseInt(continentSelect.val(), 10);
            selectedContinent = data.find((d) => {
                return d.continentId === value;
            });
            renderCities(selectedContinent.cities.map((d) => {
                d.id = d.cityId;
                d.text = d.cityName;
                return d;
            }), citySelect);
            setLocationAndZoom(   selectedContinent,
                selectedContinent
            );
            
            citySelect.on('change', function () {
                placesTypeSelect.val(0);
                listMenu.empty();
                var value = parseInt(citySelect.val(), 10);
                selectedCity = selectedContinent.cities.find((d) => {
                    return d.cityId === value;
                });
                setLocationAndZoom(selectedCity);
            });
        });
        
        placesTypeSelect.on('change', function() {
            if (selectedCity) {
                listMenu.empty();
                var value = parseInt(placesTypeSelect.val(), 10);
                var placesType = getPlacesType(value);
                listMenu.append(renderAttractions(selectedCity[placesType]));
            }
        });
    });
});
*/