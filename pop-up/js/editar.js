      bioEp.init({
            html: 
            '<img src="pop-up/imagens-pop/MILORD.png" alt="Participe" style="margin-right: 130px;" />' +
            '<div id="bio_ep_content">' +
            '<form action="/pagina-processa-dados-do-form" method="post" clas= "formulario">' +
            '<div>' +
               ' <label for="nome">Nome:</label> '+
                '<input type="text" id="nome" />' +
            '</div>'+
            '<br />' +
            '<div>' +
                '<label for="email">E-mail:</label>' +
               ' <input type="email" id="email" />' +
            '</div>' +
            '<br />' +
            '<div>' +
                '<label for="msg">Mensagem:</label>' +
                '<textarea id="msg" style="resize: none"></textarea>'+
            '</div>' +
        '<a class="button" target="_blank" href="#"> Promoção Dia dos Namorados ❤</a>' +
    '</div>'+
        '</form> '+

           
            '</div>',
            css: '#bio_ep {width: 400px; height: 400px; color: #333; background-color: #f21b1b; text-align: center; text-itens: center;background-image: url(pop-up/imagens-pop/sorteio04.jpg);background-size: cover;}' +
            '#bio_ep_content {padding: 15px 0 0 0; font-family: inherit;}' +
            '#bio_ep_content span:nth-child(2) {display: block; color: #f21b1b; font-size: 32px; font-weight: 600;}' +
            '#bio_ep_content span:nth-child(3) {display: block; font-size: 16px;}' +
            '#bio_ep_content {color: white;}' +
            
            '#bio_ep_content span:nth-child(4) {display: block; margin: -5px 0 0 0; font-size: 16px; font-weight: 600;}' +

            '.button {margin-top: 10px; }' +
            '.bio_btn {display: inline-block; margin: 18px 0 0 0; padding: 8px 25px 8px 25px; color: #fff; font-size: 19px; font-weight: 900; background-color: #ff4719; border: 1px solid #fff; cursor: pointer; -webkit-appearance: none; -moz-appearance: none; border-radius: 100px; text-decoration: none;}',
            cookieExp: 0
        });