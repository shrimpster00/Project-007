Meteor.methods({
    newPlayer: function(id, team, lat, long, speed, heading, accuracy) {
        if (typeof id !== 'undefined' && typeof Players.findOne({id: id}) === 'undefined') {
            Players.insert({
                id: id,
                team: team,
                position: {
                    latitude: lat,
                    longitude: long,
                    speed: speed,
                    heading: heading,
                    accuracy: accuracy
                }
            });
        }
        return id;
    },
    updatePlayer: function(id, lat, long, speed, heading, accuracy) {
        if (typeof id !== 'undefined' && typeof Players.findOne({id: id}) === 'undefined') {
            Players.update(Players.findOne({id: id}), { position: {
                latitude: lat,
                longitude: long,
                speed: speed,
                heading: heading,
                accuracy: accuracy
            }});
        }
        return id;
    },
    removePlayer: function(id) {
        if (typeof id !== 'undefined' && typeof Players.findOne({id: id}) !== 'undefined') {
            Players.remove(Players.findOne({id: id}));
        }
        return id;
    }
});