
 obj={"matches": [
        {
            "unique_id": 1249617,
            "date": "2021-03-18T00:00:00.000Z",
            "dateTimeGMT": "2021-03-18T23:00:00.000Z",
            "team-1": "New South Wales Women",
            "team-2": "Queensland Women",
            "squad": true,
            "toss_winner_team": "Queensland Women",
            "winner_team": "Queensland Women",
            "matchStarted": true,
            "type": ""
        },
        {
            "unique_id": 1249613,
            "date": "2021-03-18T00:00:00.000Z",
            "dateTimeGMT": "2021-03-18T23:00:00.000Z",
            "team-1": "South Australia Women",
            "team-2": "Tasmania Women",
            "squad": true,
            "toss_winner_team": "Tasmania Women",
            "winner_team": "South Australia Women",
            "matchStarted": true,
            "type": ""
        }
    ]
    }
console.log(typeof obj);
console.log(obj.matches.map(data=>(data.winner_team)));
