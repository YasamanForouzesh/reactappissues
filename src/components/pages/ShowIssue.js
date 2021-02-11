// Assignment: https://github.com/WDI-SEA/react-github-issues
// Origin repo: https://github.com/YasamanForouzesh/reactappissues

import Moment from 'moment'

export default function ShowIssue(props) {
    // const issue = FIND THE ISSUE FROM ISSUES WHERE THE :ID MATCHES ISSUE.NUMBER
    // BELOW FORMATTING NEEDS TO BE MODIFIED BECAUSE TRISHA WAS LOOKING AT THE ISSUES INDEX SCREENSHOT, AND NOT THE ISSUES DETAIL SCREENSHOT.
    return(
        <div className="issueRow">
            <h3>{issue.title}</h3> <h3>{issue.state}</h3>
            <h4>#{issue.number} Created at {issue.createDate}</h4>
            <h4>Submitted by {issue.user.login}</h4>
            <p>{issue.body}</p>
        </div>
    )
}