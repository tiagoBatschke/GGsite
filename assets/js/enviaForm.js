

function envia_email() {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); 
        const email = document.getElementById('email').value;
        const titulo = document.getElementById('titulo').value;
        const mensagem = document.getElementById('mensagem').value;
        var link = `mailto:marcelogomes@gomesegomes.ecn.br?cc=marcelogomes@gomesegomes.ecn.br&subject=${titulo}&body=${mensagem}`
        window.location.href = link;
    }); 
}





function envia_news() {
    document.getElementById('form_newsletter').addEventListener('submit', function (e) {
        e.preventDefault(); 
        const email = document.getElementById('email_news').value;
        const mensagem = `Olá, gostaria de me inscrever em sua newsletter. meu email é ${email}`
        var link = `mailto:marcelogomes@gomesegomes.ecn.br?cc=marcelogomes@gomesegomes.ecn.br&subject=Inscrever-se na newsletter&body=${mensagem}`
        window.location.href = link;
    }); 
}



envia_email();
envia_news();
