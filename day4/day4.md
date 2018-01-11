##Git

- git is a version control system that tracks each change that you do in a given directory (folder).
- configuring git:
- git config --global user.email
- git config --global user.password

Commands:
- git init  - create a new local repository; be careful where do you instigate it!!!!!  
- git status  - it shows all changes that have not been traced  
- git log - it shows you all the commits starting with the newest one    
- git add -A  - add all current changes for commiting  
- git commit -m   - commits all utracked changes; don't forget the -m!!! if you forget it you will be prompted to Vim text editor; to get out of there you have to press `sec` and then type :wq  

- git checkout ...number of commit - you will move bakc in time to a given commit  
    
- git reset --hard ...number of commit-you will delete all commits (all the code); don't do that unless absolutely necessary!!!!  

- git `branch` - lists alll the branches you currrently have  
- git checkout `branch` - moves you to another branch

merging through the terminal:
- git checkout master  
- git merge <name of branch>  
- git branch -d <name of branch>  

when I have a conflict I have to resolve it and then do 
-git commit (have to save the changes in the vim)

-git stash  - temporarly store all modified files  
git stash pop  - 

GitHub:
- add to your repo:
- git remote add origin ....url