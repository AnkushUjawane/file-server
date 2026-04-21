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
                docker run -d -p 5000:5000 --name $CONTAINER_NAME $IMAGE_NAME:latest
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