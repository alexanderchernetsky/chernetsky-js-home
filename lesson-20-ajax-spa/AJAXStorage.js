function TAJAXStorage() {
  const self = this;
  let pHash = {};
  const AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';
  let UpdatePassword;
  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      data: { f: 'READ', n: 'CHERNETSKY_STORAGE_DRINKS' },
      cache: false,
      success(ourObj) {
        if (ourObj.error !== undefined) {
          alert(ourObj.error);
        } else {
          pHash = {};
          console.log(pHash);
          if (ourObj.result !== '') {
            pHash = JSON.parse(ourObj.result);
            console.log(pHash);
            /* if (!MessagesA.length) {
              MessagesA = [];
            } */
          }
        }
      },
      error: ErrorHandler,
    },
  );


  self.addValue = function (key, value) {
    UpdatePassword = Math.random();
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET',
          n: 'CHERNETSKY_STORAGE_DRINKS',
          p: UpdatePassword,
        },
        cache: false,
        success: LockGetReady,
        error: ErrorHandler,
      },
    );

    function LockGetReady(ResultH) {
      if (ResultH.error !== undefined) {
        alert(ResultH.error);
      } else {
        pHash = {};
        pHash[key] = value;
        console.log(pHash);
        if (ResultH.result != '') {
          pHash = JSON.parse(ResultH.result);
          pHash[key] = value;
          console.log(pHash);
          /* if (!MessagesA.length) {
            MessagesA = {};
          } */
        }

        $.ajax(
          {
            url: AjaxHandlerScript,
            type: 'POST',
            data: {
              f: 'UPDATE',
              n: 'CHERNETSKY_STORAGE_DRINKS',
              v: JSON.stringify(pHash),
              p: UpdatePassword,
            },
            cache: false,
            success: UpdateReady,
            error: ErrorHandler,
          },
        );
      }
    }
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.deleteValue = function (key) {
    UpdatePassword = Math.random();
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET',
          n: 'CHERNETSKY_STORAGE_DRINKS',
          p: UpdatePassword,
        },
        cache: false,
        success: LockGetReady,
        error: ErrorHandler,
      },
    );

    function LockGetReady(ResultH) {
      if (ResultH.error !== undefined) {
        alert(ResultH.error);
      } else {
        if (ResultH.result != '') {
          pHash = JSON.parse(ResultH.result);
          delete pHash[key];
          console.log(pHash);
          /* if (!MessagesA.length) {
            MessagesA = {};
          } */
        }

        $.ajax(
          {
            url: AjaxHandlerScript,
            type: 'POST',
            data: {
              f: 'UPDATE',
              n: 'CHERNETSKY_STORAGE_DRINKS',
              v: JSON.stringify(pHash),
              p: UpdatePassword,
            },
            cache: false,
            success: UpdateReady,
            error: ErrorHandler,
          },
        );
      }
    }

    return delete pHash[key];
  };

  self.getKeys = function () {
    return (Object.keys(pHash));
  };
}


function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  alert(`${StatusStr} ${ErrorStr}`);
}

// function ReadReady(ResultH) {
//   if (ResultH.error !== undefined) {
//     alert(ResultH.error);
//   } else {
//     let MessagesA = [];
//     if (ResultH.result !== '') {
//       MessagesA = JSON.parse(ResultH.result);
//       if (!MessagesA.length) {
//         MessagesA = [];
//       }
//     }
//     // ShowMessages();
//   }
// }

function UpdateReady(ResultH) {
  if (ResultH.error != undefined) {
    alert(ResultH.error);
  }
}
