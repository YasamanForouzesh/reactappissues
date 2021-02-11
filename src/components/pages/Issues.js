import ShowIssue from './components/pages/ShowIssue'
import { Link } from 'react-router-dom'
import Moment from 'moment'


export default function Issues(props) {
    // const issues = props.issues.map((issue, i) => (
    //     <div className="issueRow">
    //         <h3>{issue.title}</h3> <h3>{issue.state}</h3>
    //         <h4>#{issue.number} Created at {issue.created_at}</h4>
    //         <h4>Submitted by {issue.user.login}</h4>
    //         <p>{issue.body}</p>
    //     </div>
    // ))

    const issue = {title: "Here's the title", number: '543', created_at: "2021-02-11T19:01:26Z", state: 'open', body: 'content of issue', user: {login: 'username'}}   
    return(
        <div className="issueRow">
            <h3>{issue.title}</h3> <h3>{issue.state}</h3>
            <h4>#{issue.number} Created at {issue.created_at}</h4>
            <h4>Submitted by {issue.user.login}</h4>
            <p>Issue was created {Moment.</p>
            <p>{issue.body}</p>
        </div>
    )
}