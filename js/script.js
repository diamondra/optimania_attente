let closeNumber = 0;

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "interactive") {
    } else if (event.target.readyState === "complete") {
        setTimeout(() => {
            $('#promo-modal').modal("show");
        }, 5000)
    }
});

function closeModalForm(){
    $('#form-success-modal').modal("hide");
}
function closeModalPromo(){
    $('#promo-modal').modal("hide");
    if(closeNumber == 0){
        setTimeout(() => {
            $('#promo-modal').modal("show");
            closeNumber ++;
        }, 7000)
    }
}
$( document ).ready(function() {
    $("form").submit(function (event) {
        var formData = {
            nom: $("#nom").val(),
            prenom: $("#prenom").val(),
            email: $("#email").val(),
            phone: $("#phone").val()
        };        

        sendEmail(formData);
        event.preventDefault();
    });
    
    function sendEmail(formData) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "diamondrastier@gmail.com",
            Password : "EC57BFD7896B53DAA78D48C4085CCE5B3BD8",
            To : formData.email,
            From : "diamondrastier@gmail.com",
            Subject : "Test email",
            Body : `
            <html>
                <h2>Demande d'informations</h2>
                <div>
                    <div>
                        <p>Nom: ${formData.nom}</p>
                        <p>Prénom: ${formData.prenom}</p>
                        <p>Email: ${formData.email}</p>
                        <p>Téléphone: ${formData.phone}</p>
                    </div>
                </div>
            </html>
            `
        }).then(
            function(){
                $('#form-success-modal').modal("show");
                $("#nom").val('');
                $("#prenom").val('');
                $("#email").val('');
                $("#phone").val('');
            }
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
    var now = new Date();
    var dateProm = new Date('2022-12-31T00:00:00');
    $('.countdown-container').final_countdown({
        'start': now.getTime() / 1000,
        'end': dateProm.getTime() / 1000,
        'now': now.getTime() / 1000,
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
