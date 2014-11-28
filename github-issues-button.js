var userNav = document.getElementById('user-links');

var issuesButton = document.createElement('li');
issuesButton.className = 'header-nav-item'

var issuesLink = document.createElement('a');
issuesLink.href = 'https://github.com/issues/assigned';
issuesLink.className = 'header-nav-link ';

var issuesIcon = document.createElement('span');
issuesIcon.className = 'octicon octicon-issue-opened';

issuesLink.appendChild(issuesIcon);
issuesButton.appendChild(issuesLink);
userNav.appendChild(issuesButton);
