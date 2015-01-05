jQuery("#simulation")
  .on("click", ".s-db1f675f-41a0-4247-8e36-029e1f63615c .click", function(event, data) {
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
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_5": {
                      "attributes": {
                        "background-color": "#7FCDEA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_5": {
                      "attributes-ie": {
                        "-pie-background": "#7FCDEA",
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
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_5": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_5": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/943cebb8-1ff7-4461-9c5e-1e3c201a9475"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_6": {
                      "attributes": {
                        "background-color": "#7FCDEA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_6": {
                      "attributes-ie": {
                        "-pie-background": "#7FCDEA",
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
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_6": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_6": {
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
    } else if(jFirer.is("#s-Rich_text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_7": {
                      "attributes": {
                        "background-color": "#7FCDEA",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_7": {
                      "attributes-ie": {
                        "-pie-background": "#7FCDEA",
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
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_7": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-db1f675f-41a0-4247-8e36-029e1f63615c #s-Rich_text_7": {
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
    }
  });