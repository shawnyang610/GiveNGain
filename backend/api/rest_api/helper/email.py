from flask_mail import Mail, Message
from rest_api import app
import random
import string

def requester_confirmation(username, recipient):
    mail = Mail(app)
    msg = Message("request received!", sender="info.youcmt@gmail.com", recipients=[recipient])
    msg.body = "Hi {}, Thank you making a new request with us!".format(username)
    # msg.html = "<b>HTML</b>"
    try:
        mail.send(msg)
    except:
        # do nothing in case of bad email
        return
    return

def helper_confirmation(username, recipient):
    mail = Mail(app)
    msg = Message("request received!", sender="info.youcmt@gmail.com", recipients=[recipient])
    msg.body = "Hi {}, we found someone who needs your help!".format(username)
    msg.html = """<p>Hi {}, we found someone who needs your help!</p><p>Name: John Doe</p><p>Language: Russian</p><p>date: 11/17/2018</p><p>time: 12:00 pm - 4:00 pm</p><p>Help Needed: Grocery Shopping</p><p>Location: 6530 Kissena Blvd, Flushing, NY 11367</p><a href="http://localhost:3001/about">click here to confirm.</a>""".format(username)
    try:
        mail.send(msg)
    except:
        # do nothing in case of bad email
        return
    return



def random_code_generator(n):
    ret = ''.join(random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for _ in range(n))
    return ret
