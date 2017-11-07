// orat.io integration
module.exports = Franz => {
    function getMessages() {
      let direct = 0;
      let indirect = 0;
      Franz.setBadge(direct, indirect);
    }
    Franz.loop(getMessages);
}