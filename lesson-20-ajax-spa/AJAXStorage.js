function TAJAXStorage() {
  const self = this;
  const ajaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';
  const errorHandler = function (jqXHR, StatusStr, ErrorStr) {
    alert(`${StatusStr} ${ErrorStr}`);
  };
  const updateReady = function (resultH) {
    if (resultH.error != undefined) {
      alert(resultH.error);
    }
  };
  let pHash;
  let updatePassword;

  $.ajax(
    {
      url: ajaxHandlerScript,
      type: 'POST',
      data: { f: 'READ', n: 'CHERNETSKY_STORAGE_DRINKS' },
      cache: false,
      success(resultH) {
        if (resultH.error !== undefined) {
          alert(resultH.error);
        } else {
          pHash = {};
          if (resultH.result !== '') {
            pHash = JSON.parse(resultH.result);
          }
        }
      },
      error: errorHandler,
    },
  );

  self.addValue = function (key, value) {
    updatePassword = Math.random();
    $.ajax(
      {
        url: ajaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET',
          n: 'CHERNETSKY_STORAGE_DRINKS',
          p: updatePassword,
        },
        cache: false,
        success: lockGetReady,
        error: errorHandler,
      },
    );

    function lockGetReady(resultH) {
      if (resultH.error !== undefined) {
        alert(resultH.error);
      } else {
        pHash = {};
        pHash[key] = value;
        if (resultH.result != '') {
          pHash = JSON.parse(resultH.result);
          pHash[key] = value;
        }

        $.ajax(
          {
            url: ajaxHandlerScript,
            type: 'POST',
            data: {
              f: 'UPDATE',
              n: 'CHERNETSKY_STORAGE_DRINKS',
              v: JSON.stringify(pHash),
              p: updatePassword,
            },
            cache: false,
            success: updateReady,
            error: errorHandler,
          },
        );
      }
    }
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.deleteValue = function (key) {
    updatePassword = Math.random();
    $.ajax(
      {
        url: ajaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET',
          n: 'CHERNETSKY_STORAGE_DRINKS',
          p: updatePassword,
        },
        cache: false,
        success: lockGetReady,
        error: errorHandler,
      },
    );

    function lockGetReady(resultH) {
      if (resultH.error !== undefined) {
        alert(resultH.error);
      } else {
        if (resultH.result != '') {
          pHash = JSON.parse(resultH.result);
          delete pHash[key];
        }

        $.ajax(
          {
            url: ajaxHandlerScript,
            type: 'POST',
            data: {
              f: 'UPDATE',
              n: 'CHERNETSKY_STORAGE_DRINKS',
              v: JSON.stringify(pHash),
              p: updatePassword,
            },
            cache: false,
            success: updateReady,
            error: errorHandler,
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
