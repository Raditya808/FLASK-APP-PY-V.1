from flask import Blueprint, render_template, request, flash 

auth = Blueprint('auth',__name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    data = request.form
    print(data)
    return render_template("login.html", boolean=True)


@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        
        if len(email) < 4:
            flash('Email must be at least 4 characters long', category='error')
        elif len(firstName) < 2:
            flash('First name must be at least 2 characters long', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match', category='error')
        elif len(password1) < 7:
            flash('Password must be atleast 7 characters.', category='error')
        else:
            flash('Account created successfully!', category='success')

    return render_template("sign_up.html")
