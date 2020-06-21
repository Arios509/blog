## Some of the idea about code review
### And how to make the process smoother


### What is code review?

Code review is to make sure company development process more standard and easy to debug. Few example of benefits:

1. Make sure all the standard of the code.
2. Make sure the problem will be cut less.
3. Ensure the code will be tested before sent to QA.
4. etc.

Code review will bring times for checking and make changes, and it will easy to have conflict for the code.

### How to make the step simpler?

#### Git
GIT is one of the powerful tools to control for code. Here is the example when develop a new function.

1. Understand the requirment including function and design. (Take no more than 30 mins.)
2. One function for one git branch.
3. After understand the requirement, then make a new branch from the latest development branch(Make sure the development branch is latest. )
>Branch name must be understandable.
4. Here is the example to create a branch.    ```git checkout -b f-<action>-<function-name>```
   1. **f** stand for function, to let people understand this branch is use for develop function. 
   2. ```<action>``` can categorize to which function you want to do. Like create a new function, fix a bugs.
   3. ```<function-name>``` replace to the function that you are develop. 
   4. Examples:
      1. f-create-login
      2. f-create-signup
      3. f-create-auth 
      4. f-create-user-payment
      5. f-create-admin-auth
      6. f-create-admin-payment-list
      7. f-create-admin-vm-list
      8. f-create-admin-vm-manual
      9. f-fix-admin-vm -list
      10. f-fix-login
5. Inside each specific branch, then only do the specific part. Dont add on other non related.
6. After finish, then push to git, and create ```merge request``` to development branch. *For this step will reduce the reviewer to check a lot of the file, and for all this will help the review time shorter*
7. After you submit, you will get the number of PR like this ![PR Number](https://i.imgur.com/HO8i51I.png)Example from the image the PR number is ```PR#1```
8. Tag the person who will check your code with some screenshot and your ```PR#xxx```to prove that your code is working and thats the result you build.
9. While waiting, can proceed to another function and restart the ```STEP 1 to STEP 8```
   
### WHAT WILL HAPPEN IF THE CODE BEING REJECT?
#### WHY being rejected?

1. Code doesnt meet/follow the standard.
2. Some logic need to change. For example, some function need unsubsribe or some part do not need to use loop.
3. THE MOST CRITICAL PART - Function do wrong.
4. etc.

#### What should you do for that?

1. Checkout the branch that you submitted for merge request.
2. Fix the code and update for the comment like click the resolved button. ![Update comment](https://i.imgur.com/czW40rE.png)
3. Commit with message like ```Fixed PR#xxxx```
4. Push to git
5. Tagged the reviewer again, and screenshot the working result.
6. Then continue back to other work.

### WHY YOU NEED TO SOLVE FOR CODE REVIEW COMMENT?

1. To make sure the requirements for the function does wrong. 
2. And improve your code quality, and readable by other people.
3. East to trace function by function, and make sure the current one is 100% working.




