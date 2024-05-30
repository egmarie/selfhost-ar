
#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /var/www/html/

#navigate into our working directory where we have all our github files
cd /var/www/html/

#add npm and node to path
# export NVM_DIR="$HOME/.nvm"	
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)
# I need to make Role for AWS CodeDeploy to attach to ec2

#install node modules
npm install
npm run build

#start our node app in the background
npm start > app.out.log 2> app.err.log < /dev/null & 