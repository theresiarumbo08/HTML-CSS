function myFunction() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Show 60 more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Show less";
                moreText.style.display = "inline";
            }
        }

        const searchBar = document.querySelector('#search');
        searchBar.addEventListener('keyup', searchUser);

        function searchUser(e) {
            const text = e.target.value.toLowerCase();

            document.querySelectorAll('.yourListClassNames').forEach(function (user) {
                const userName = user.querySelector('.user-info').innerText

                if (userName.toLowerCase().indexOf(text) != -1) {
                    user.style.display = 'block'
                } else {
                    user.style.display = 'none'
                }
            });
        }

        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
        }

        function myFunction1(){
            var myValue;
        
            if(confirm("Use your microfon")){
                myValue = "OK pressed!";
            }else{
                myValue = "Cancel!";
            }
            
            document.getElementById("demo").innerHTML;
        }