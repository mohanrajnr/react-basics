# react-basics


Any new learning should use a new branch and should be merged later.
## create a new branch
git checkout master
git pull origin master
git checkout -b new_develop_branch
git pull origin new_develop_branch
git push origin new_develop_branch

## merge the develop branch with master
git checkout master
git pull origin master
git merge new_develop_branch
git push origin master

## delete the branch created for the new development
git branch -D new_develop_branch
git push --delete new_develop_branch
or 
git push origin :new_develop_branch
