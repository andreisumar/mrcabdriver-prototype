(function(window, undefined) {
  var dictionary = {
    "61a10bb1-dc17-46a6-87b5-82295f19286b": "InitialScreen + Sign Up",
    "1d0ed7af-a62a-49ad-9712-e9bfa93524cb": "Book - Address From",
    "0c2608ad-bc79-4972-b419-0b39cba05816": "InitialScreen + Sign In",
    "d3524e34-b56c-4af6-b15d-ead6d92552b3": "Book - Confirmed",
    "efa42451-904e-44d9-9ce7-b4614f388ed3": "Book - Estimated Price",
    "db1f675f-41a0-4247-8e36-029e1f63615c": "History - Main",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InitialScreen",
    "6bcc6db2-6762-4fe6-bc75-524ca463f1b3": "Book - Address To",
    "943cebb8-1ff7-4461-9c5e-1e3c201a9475": "History - Rate",
    "de09828d-5440-4157-b096-5d45c9252ad9": "Book - Confirm",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);