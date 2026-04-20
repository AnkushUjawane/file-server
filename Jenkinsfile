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
                checkout scm
            }
        }

        stage('Build Docker Image'){
            steps{
                sh '''
                docker build -t file-server:${BUILD_NUMBER} ./server
                docker tag $IMAGE_NAME:${BUILD_NUMBER} $IMAGE_NAME:latest
                '''
            }
        }

        stage('Run container'){
            steps{
                sh '''
                docker rm -f $CONTAINER_NAME || true
                docker run -d -p $PORT:$PORT --name $CONTAINER_NAME $IMAGE_NAME:latest
                '''
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