const { useState } = React

export function MailPreview({ mail, setIsShown }) {

    const [isToExpand, setToExpand] = useState(false)

    // function getStar(){
    //     if(mail.isStarred) return ''
    //     else return
    // }

    return <article className={`mail-preview ${mail.isRead ? 'isRead' : ''}`} onClick={() => setToExpand(isToExpand => !isToExpand)}>
        <img className={`icon star ${mail.isStarred ? 'starred' : ''}`} src={`../../assets/img/icons/icons-mail/${mail.isStarred ? 'starred' : 'star'}-icon.png`} />
        <span className="preview from">{mail.from}</span>
        <span className="preview subject">{mail.subject}</span>
        <hr />
        {
            isToExpand &&
            <article className="mail-expand">
                <img className="expand-icon icon" src="../../assets/img/icons/icons-mail/expand-icon.png" onClick={() => setIsShown('mailDetails')} />
                <h3 className="expand from">{mail.from}</h3>
                <h4 className="expand subject">{mail.subject}</h4>
                <p className="expand body">{mail.body}</p>
                <hr />
            </article>
        }
    </article>
}