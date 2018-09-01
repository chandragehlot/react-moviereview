import React from 'react';

const HomePage = ({match})=>(
<div className="home-page-container">
	<div className="home-img-cont">
		<img className="img-basic" src={require('../images/home-banner.jpg')} alt="homepage-banner" />
	</div>
	<div className="home-page-content">
		<h2 className="page-heading">Welcome to Cinema Galiyara</h2>
		<div>
			The clout of the hotel review aggregators marches on. The blunt question is this: Are you keeping up?
			There is big news in this sector. You need to know it to stay in the game.
			Many hoteliers have fallen asleep at this switch. They are scrambling to focus on influencers, the rise of digital advertising, posting on Instagram, and trying to attend to the many other new initiatives that are shaping 21st century hotel and resort marketing.
			But this is fact: online hotel reviews may be the single most influential factor in the booking decisions of most consumers.
			Especially for independents and members of very small groups.
			Maybe even more so for non US hotels. When I have stayed in recent years in Paris or Rome, I have always stayed in independents - and definitely was heavily influenced by online reviews. And got very good advice online.
		</div>
		<br></br>
		<div>

			But here's the big change: the names of the leading players in online reviews are fast shifting.
			Five years ago I generally told hotels they need only give notice to TripAdvisor reviews.
			No more. There's a lot more action in the sector, according to Revinate's Global Hotel Reputation Benchmark Report. It's available to download here
			The report offers a bounty of factoids. For instance, hotel review volume jumped 27% from 2016 to 2017, as more of us see the value of participating in this crowd-sourced opinion vehicle.
			The "review pace" per month per hotel was 38, up from 29 in 2016.
			But where the data gets really fascinating is in its analysis of the sources of reviews. Booking.com now leads the pack with 29.5% of reviews.
			Surprisingly, Google has vaulted to #2, with 19.8% of reviews.
			TripAdvisor is now 16.5%.
			Facebook has climbed to #4 with 8.3%.
			If you had to bet, bet that Google and Facebook - the two tech titans with real talent at connecting with the public - will continue to grab share.
			TripAdvisor, meantime, grievously stumbled in its censorship of reviews that alleged sexual attacks by hotel employees – and that story appeared nationally, in leading newspapers. Many users told me they were ignoring TripAdvisor because it seemed untrustworthy as an impartial aggregator of reviews. That baggage weighs TripAdvisor down still.
		</div>
	</div>
</div>	
);

export default HomePage;