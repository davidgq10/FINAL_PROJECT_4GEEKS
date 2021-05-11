# Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.message import EmailMessage
from string import Template
from pathlib import Path

def SendEmailTemplate(template, data, to, subject):
    html = Template(Path(f'src/api/templates/{template}.html').read_text())
    email = EmailMessage()
    email['from'] = "Easy Parts CR"
    email['to'] = to
    email['subject'] = subject

    email.set_content(html.substitute(data), 'html')

    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login('essaypartscr2021@gmail.com', '4Geeks2021')
        smtp.send_message(email)
        print('all good!')

