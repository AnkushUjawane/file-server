pipeline{
    agent any
    
    stages {
        stage('Install Dependencies'){
            steps{
                sh 'cd server && npm install'
            }
        }

        stage('Build Docker Image'){
            steps{
                sh 'docker build -t file-server ./server'
            }
        }

        stage('Run container'){
            steps{
                sh '''
                docker stop file-server || true
                docker rm file-server || true
                docker run -d -p 5000:5000 --name file-server file-server
                '''
            }
        }
    }
}