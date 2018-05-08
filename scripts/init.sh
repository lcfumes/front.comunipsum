SCRIPTDIR=$(dirname "$0")
cd $SCRIPTDIR
cd ..
BASEPATH=$(pwd)

echo "Building containers"
docker build -t lcfumes/comunipsum.front.prod:latest .

echo "Start containers"
docker run -it -d -p 5000:5000 lcfumes/comunipsum.front.prod:latest
