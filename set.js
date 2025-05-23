// Form container
let form = document.getElementById('form');
let login = document.getElementById('login');
let username = document.getElementById('username');

// Question containers
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q7 = document.getElementById('q7');
let q8 = document.getElementById('q8');
let q9 = document.getElementById('q9');
let q10 = document.getElementById('q10');

// Question inputs
let q1ans = document.getElementById('q1ans');
let q2ans = document.getElementById('q2ans');
let q3ans = document.getElementById('q3ans');
let q4ans = document.getElementById('q4ans');
let q5ans = document.getElementById('q5ans');
let q6ans = document.getElementById('q6ans');
let q7ans = document.getElementById('q7ans');
let q8ans = document.getElementById('q8ans');
let q9ans = document.getElementById('q9ans');
let q10ans = document.getElementById('q10ans');

login.addEventListener('click', (e)=>{
    e.preventDefault();

    if (username.value === '') {
        form.style.boxShadow = '0 0 4px red';
        username.style.border = 'solid 1px red';
        alert('Access Denied : Name field cannot be empty!!!')

        setTimeout(() => {
            form.style.boxShadow = '0 0 3px rgb(148, 148, 189)';
        }, 3000);
    }else{
        alert('Access Granted !!!')
        form.style.boxShadow = '0 0 4px green';
        username.style.border = 'solid 1px green';
        q1.style.fontStyle = 'italic';

        setTimeout(() => {
            form.style.display = 'none';
            q1.style.display = 'block';
        }, 2000);
    }
    
})

function nxt1() {
    q1.style.display = 'none';
    q2.style.display = 'block';
}

// Question 2
function prev2() {
    q2.style.display = 'none';
    q1.style.display = 'block';
}

function nxt2() {
    q2.style.display = 'none';
    q3.style.display = 'block';
}

// Question 3
function prev3() {
    q3.style.display = 'none';
    q2.style.display = 'block';
}

function nxt3() {
    q3.style.display = 'none';
    q4.style.display = 'block';
}

// Question 4
function prev4() {
    q4.style.display = 'none';
    q3.style.display = 'block';
}

function nxt4() {
    q4.style.display = 'none';
    q5.style.display = 'block';
}

// Question 5
function prev5() {
    q5.style.display = 'none';
    q4.style.display = 'block';
}

function nxt5() {
    q5.style.display = 'none';
    q6.style.display = 'block';
}

// Question 6
function prev6() {
    q6.style.display = 'none';
    q5.style.display = 'block';
}

function nxt6() {
    q6.style.display = 'none';
    q7.style.display = 'block';
}

// Question 7
function prev7() {
    q7.style.display = 'none';
    q6.style.display = 'block';
}

function nxt7() {
    q7.style.display = 'none';
    q8.style.display = 'block';
}

// Question 8
function prev8() {
    q8.style.display = 'none';
    q7.style.display = 'block';
}

function nxt8() {
    q8.style.display = 'none';
    q9.style.display = 'block';
}

// Question 9
function prev9() {
    q9.style.display = 'none';
    q8.style.display = 'block';
}

function nxt9() {
    q9.style.display = 'none';
    q10.style.display = 'block';
}

// Question 10
function prev10() {
    q10.style.display = 'none';
    q9.style.display = 'block';
}

// Option clicks
function q1a() {
    q1ans.value = 'Joules';
}
function q1b() {
    q1ans.value = 'Watts';
}
function q1c() {
    q1ans.value = 'Amps';
}