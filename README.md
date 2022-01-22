# react-basics


Any new learning should use a new branch and should be merged later.
## create a new branch
git checkout master<br />
git pull origin master<br />
git checkout -b new_develop_branch<br />
git pull origin new_develop_branch<br />
git push origin new_develop_branch<br />

## merge the develop branch with master
git checkout master<br />
git pull origin master<br />
git merge new_develop_branch<br />
git push origin master<br />

## delete the branch created for the new development
git branch -D new_develop_branch<br />
git push --delete new_develop_branch<br />
or <br />
git push origin :new_develop_branch<br />
