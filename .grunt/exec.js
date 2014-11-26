module.exports = {
    git_push: "git add . --all && git commit -am \"Work work\" && git push",
    deploy: 'rsync -az --exclude=".DS_Store" ./dist/ root@192.168.60.250:/var/www/qibana'
};