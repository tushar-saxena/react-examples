import emailjs from 'emailjs-com'
const Mailer  = () => {
    function sendEmail(e) {
        console.log("i called")
        e.preventDefault();
        var templateParams = {
            name: 'James',
            notes: 'Check this out!',
            to_email: 'tusharsaxena1711@gmail.com'
        };
        emailjs.send("service_d2r32rh","template_caklckc",templateParams,"3uR7VW0Q6T_PFlj27").then(res =>{
            console.log(res);
        }).catch(err => {
           console.log("error");
        });
    }

    return (
        <div>
            <h1>Test Mail</h1>
            <button onClick={sendEmail}>
                Send Email
            </button>
        </div>
    )
}

export default Mailer;