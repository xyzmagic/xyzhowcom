    function initAvatar() {
      var avatar = document.getElementById('avatar');
      var image = document.getElementById('image');
      var input = document.getElementById('input');
      //var $progress = $('.progress');
      //var $progressBar = $('.progress-bar');
      var _alert = $('.alert');
      var _modal = $('#modal');
      var cropper;
      var _imageName = "";

      //$('[data-toggle="tooltip"]').tooltip();

      input.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
          input.value = '';
          image.src = url;
          _alert.hide();
          _modal.modal('show');
        };
        var reader;
        var file;
        var url;

        if (files && files.length > 0) {
          file = files[0];
          _imageName = file.name;
          if (URL) {
            done(URL.createObjectURL(file));
          } else if (FileReader) {
            reader = new FileReader();
            reader.onload = function (e) {
              done(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }
      });

      _modal.on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
          aspectRatio: 1,
          viewMode: 1,
          cropBoxResizable: false,
          dragMode: "none"
        });
      }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
      });
      
      document.getElementById('zoomPlus').addEventListener('click', function () {
        cropper.zoom(0.1);
      });
      
      document.getElementById('zoomMinus').addEventListener('click', function () {
        cropper.zoom(-0.1);
      });
      
      document.getElementById('crop').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;

        //_modal.modal('hide');

        if (cropper) {
          canvas = cropper.getCroppedCanvas({
            width: 200,
            height: 200
          });
          initialAvatarURL = avatar.src;
          //avatar.src = canvas.toDataURL();
          //$progress.show();
          _alert.removeClass('alert-success alert-warning');
          canvas.toBlob(function (blob) {
            var formData = new FormData();
            
            formData.append('siteType', "xyzlike-avatar");
            formData.append('operation', "upload");
            var timestamp = new Date().getTime();
            formData.append('stamp', timestamp);
            
            formData.append('files[]', blob, _imageName);
            
            $.ajax('avatar', {
              method: 'POST',
              data: formData,
              processData: false,
              contentType: false,

              complete: function (xhr, ts) {
                  
                var response = xhr.responseJSON;
                if(response){
                  var commit = response.commit;
                  var message = response.message;
                  if(commit){
                    avatar.src = response.url;
                  }else {
                   _alert.show().addClass('alert-warning').text('上传失败。');
                  }
                  
                }else {
                   _alert.show().addClass('alert-warning').text('上传失败。');
                }
                
              }
              
            });
          });
        }
      });
    }