function show1() {
            blankAll();
            document.getElementById('aboutMe').innerHTML = ` <p>My name is <i> Mohammad </i>. I live in Lørenskog.</p>`;
            document.getElementById('button1').style.backgroundColor = 'white';

        }
        function show2() {
            blankAll();
            document.getElementById('hobbies').innerHTML = ` <p>My hobbies are -</p>
            <ul>
                <li>cooking</li>
                <li>reading</li>
                <li>chilling</li>

                
            </ul>
            `;
            document.getElementById('button2').style.backgroundColor = 'white';


        }
        function blankAll() {
        
            document.getElementById('aboutMe').innerHTML = '';
            document.getElementById('hobbies').innerHTML = '';

        }