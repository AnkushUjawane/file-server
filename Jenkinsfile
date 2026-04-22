pipeline{
    agent any

    environment{
        IMAGE_NAME = "file-server"
        CONTAINER_NAME = "file-server"
        PORT = "5000"
    }
    
    stages {
        stage('checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/AnkushUjawane/file-server.git'
            }
        }

        stage('Build Docker Image'){
            steps{
                sh '''
                docker build --network=host --no-cache -t $IMAGE_NAME:$BUILD_NUMBER ./server
                docker tag $IMAGE_NAME:${BUILD_NUMBER} $IMAGE_NAME:latest
                '''
            }
        }

        stage('stop old container'){
            steps{
                sh '''
                docker rm -f $CONTAINER_NAME || true   
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d -p ${PORT}:${PORT} --env-file $WORKSPACE/server/.env --name $CONTAINER_NAME $IMAGE_NAME:latest
                '''
            }
        }

        stage("Push to dockerhub"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) 
                {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin

                    docker tag $IMAGE_NAME:latest $DOCKER_USER/$IMAGE_NAME:latest
                    docker push $DOCKER_USER/$IMAGE_NAME:latest
                    '''
                }
            }
        }
    }

    post{
        success{
            echo "Deployment successfull and constainer is running"
        }
        failure{
            echo "Pipeline failed, check logs"
        }
    }
}