import ShowIssue from './components/pages/ShowIssue'
import { Link } from 'react-router-dom'

export default function Issues(props) {
    return (
        {props.issues.map( (issue, i) => {
            return (
                <div className="issueRow">
                    <h3>{props.issue.title}</h3> <h3>{props.state}</h3>
                    <h4>#{props.issue.number} Created at {props.createDate}</h4>
                    <h4>Submitted by {props.issue.user.login}</h4>
                    <p>{props.issue.body}</p>
                </div>
            )
            <ShowIssue issue={issue} key={`issue key ${i}`}
        })}
    )
}