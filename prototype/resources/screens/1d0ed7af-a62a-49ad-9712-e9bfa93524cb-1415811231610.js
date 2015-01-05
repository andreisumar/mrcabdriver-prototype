jQuery("#simulation")
  .on("click", ".s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Panel_9": {
                      "attributes": {
                        "background-color": "#8CD7F7",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Panel_9 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Panel_9": {
                      "attributes-ie": {
                        "-pie-background": "#8CD7F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 250
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Panel_9": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Panel_9 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Panel_9": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#2C94BB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Button_3": {
                      "attributes": {
                        "background-color": "#CECECE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#CECECE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6bcc6db2-6762-4fe6-bc75-524ca463f1b3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_3 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_4": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_4 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_5": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_3 input": {
                      "attributes": {
                        "color": "#828282",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_4": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Input_4 input": {
                      "attributes": {
                        "color": "#828282",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_5": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-1d0ed7af-a62a-49ad-9712-e9bfa93524cb #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });