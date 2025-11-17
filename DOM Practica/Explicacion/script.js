let btn = document.querySelector("button");
// btn.onclick = DisplayMessage; // Version anterior cuando no queriamos meter parametros

/*
Al guardar y volver a cargar, verás que aparece el cuadro de mensaje sin hacer clic en
el botón. Los paréntesis en este contexto a veces se denominan "operador de invocación
de función". Solo los utiliza cuando desea ejecutar la función inmediatamente en el
ámbito actual. Del mismo modo, el código dentro de la función anónima no se ejecuta
inmediatamente, ya que está dentro del alcance de la función.
*/

/*
// Anterior al cambio de iconos
btn.onclick = function() {
    DisplayMessage('Woo, this is a different message!');
};
*/

/*
Si queremos especificar parámetros dentro de paréntesis para la función a la que
estamos llamando, no podemos llamarla directamente, necesitamos colocarla dentro de
una función anónima para que no esté en el ámbito inmediato y, por lo tanto, no se llame
de inmediato. Ahora no se llamará hasta que se haga clic en el botón.
Vuelva a cargar e intenta el código nuevamente y verás que aún funciona bien, ¡excepto
que ahora también puede variar el mensaje dentro del parámetro para obtener diferentes
mensajes mostrados en el cuadro!

*/

btn.onclick = function() {
    DisplayMessage('this is a red box?','warning');
    DisplayMessage('this is a chat box?','chat');
    DisplayMessage('this is a default box?');
};

function DisplayMessage(msgText, msgType) {
    let html = document.querySelector('html');

    let panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    let msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    };

    if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(assets/icons/warning.png)';
    panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(assets/icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
    } else {
    msg.style.paddingLeft = '20px';
    }
};

