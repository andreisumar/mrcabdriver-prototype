jQuery("#simulation")
  .on("click", ".s-efa42451-904e-44d9-9ce7-b4614f388ed3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_3": {
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
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_3": {
                      "attributes": {
                        "background-color": "#CECECE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_3": {
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
                    "target": "screens/de09828d-5440-4157-b096-5d45c9252ad9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_4": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_4": {
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
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_4": {
                      "attributes": {
                        "background-color": "#CECECE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-efa42451-904e-44d9-9ce7-b4614f388ed3 #s-Button_4": {
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
    }
  });