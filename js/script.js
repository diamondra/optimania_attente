$( document ).ready(function() {
    $("form").submit(function (event) {
        var formData = {
            nom: $("#nom").val(),
            prenom: $("#prenom").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        };
        console.log(formData);
        sendEmail();

        event.preventDefault();
    });
    function sendEmail() {
        console.log("hshs");
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "diamondrastier@gmail.com",
            Password : "EC57BFD7896B53DAA78D48C4085CCE5B3BD8",
            To : 'diamondrastier@gmail.com',
            From : "diamondrastier@gmail.com",
            Subject : "Test email",
            Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
        }).then(
          message => alert(message)
        );
    }

    doSlideshow();
    
    function doSlideshow(){
        $('#content').mkinfinite({
            imagesList:new Array(
                'images/1.jpg',
                'images/2.jpg',
                'images/3.jpg',
                'images/4.jpg',
            ),
            animationTime:7000,
            animationInterval:10,
            isFixedBG:true,
            zoomOut:true,
        });
    }
    $('.countdown-container').final_countdown({
        'start': 1362139200,
        'end': 1388461320,
        'now': 1387461319,
        'seconds': {
            borderColor: '#ffc000',
            borderWidth: '6'
        },
        'minutes': {
            borderColor: '#ECEFCB',
            borderWidth: '6'
        },
        'hours': {
            borderColor: '#ACC742',
            borderWidth: '6'
        },
        'days': {
            borderColor: '#26b7b4',
            borderWidth: '6'
        }
    });
});
