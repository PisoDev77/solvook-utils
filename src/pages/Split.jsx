import { useState } from "react";

export default function Split() {
  const [data, setData] = useState({
    str: "",
    seperator: ".",
    res: [],
  });

  const handleForm = (e) => {
    const { seperator, str } = e.currentTarget;

    const a =
      `The sharing economy is an economical system based on sharing assets or services, for free 
    or for a fee, directly from and between individuals.
    //
    Naming in 2011 by TIME Magazine as one of the 10 idea that would change the world, the 
    economic model is now transformed the landscape of the world economy.
    //
    There is five key concepts of the sharing economy.
    //
    Here you can read about them, along with appropriate case stories cast light on what the 
    sharing economy is and how does it work.
    //
    Two young men in San Francisco were very poor they could not pay their rent, so they 
    thought to rent out three air mattresses on their floor to people and served them breakfast.
    //
    They made a simple website to remote their little bed and breakfast, and three people showed 
    up, each pay $80.
    //
    That they started was a whole new business model which providing a platform for the sharing 
    economy.
    //
    Thanks to the Internet and digital technology, now there are much more data about people 
    and things, which make sharing cheaper and easier than ever.
    //
    You were able to rent a private room before the Internet, but it was usually more trouble as 
    it was worth.
    //
    That is, without the Internet, how can you know that somebody has a spare room to your 
    taste in a simple family house?
    //
    The website deals with all the rest, locates the right space and dealing with safety issues, 
    reservations, and payment.
    //
    Hyeonwoo needed to install a new lighting fixture on his ceiling, but a power drill was so 
    expensive to buy only for the occasion.
    //
    In Hyeonwoo's neighborhood, for example, there lived someone that had a power drill but 
    hadn't needed to use it for a long while.
    //
    A sharing website where matches owners and borrowers in the same area connected the two 
    of themselves.
    //
    Hyeonwoo could borrow a power drill from his neighbor, paid a reasonable fee for using it.
    //
    Without the service, Hyeonwoo would have no choice but to buy the expensive tool.
    //
    Now you can access what you need, even when you don't own it, all thanks for the sharing 
    economy.
    //
    That is the principal behind a sharing economy that enables people sharing cars, 
    accommodations, and other items because now they can get however they need whenever 
    they want.
    //
    The business model of a sharing economy instantly connects owners of underused assets with 
    others will to pay to use them.
    //
    Easy access, made possibly by Internet technology, is now as good as ownership.
    //
    Seonwha is a computer programmer who works mostly at home but sometimes go to the 
    office to have meetings.
    //
    But for the sharing service, one more car will be made only to stay still in her garage most 
    of the time.
    //
    In order to use her car more often, she would drive to places which she usually goes with 
    foot now.
    //
    She thinks the sharing economy distributes to save the environment since less car use means 
    reduced CO₂ emissions.
    //
    Though not primary driven by environmental goals, the sharing economy brings considerate 
    benefits to the environment.
    //
    Resources are used more efficiently, it helps save on materials and energy.
    //
    However, car sharing services prove to yield environmentally friendly results.
    //
    Studies have found that car sharing helped reducing CO₂ emissions significantly.
    //
    That the sharing economy inspires to is a more sustainable way of utilizing limited resources.
    //
    Through a website sharing works of art, he picked an artwork through his taste from a wide 
    variety of artists and rented it monthly.
    //
    He is not interested in temporary ownership of particular artworks.
    //
    Studies show that experience increases satisfaction far more than acquisitions are, and the 
    new generation that embraces the sharing economy understand it better.
    //
    Therefore, art lovers used to finding satisfaction in collecting artworks.
    //
    Now they have begun to place value with the experience of enjoying them.
    //
    There are many who appreciate artworks, but have no interest in owning it for good.
    //
    This benefits from the artists as well because of they get a monthly income for their 
    artworks that otherwise may be in storage or waiting for their next exhibition.
    //
    It is a powerful cultural trend which people value experiences more than possessions.
    //
    Stella is a retired designer which started a second life as a host to international travelers.
    //
    When her husband passed away, she came up with depression.
    //
    She started to share the room her husband was used to occupy.
    //
    Meeting new people from all over the world helped her recovered from her grief.
    //
    Now she enjoys to tell her guests stories about the neighborhood and prepare them delicious 
    local breakfasts, try to make them feeling at home.
    //
    She has made friend with many guests and stays in touch with some of them.
    //
    For social souls, meeting new people is a big part of the charm.
    //
    But sharing assumes human intersection by its definition and appeals to the basic human 
    needs for community.
    //
    The core of a sharing economy is people directly deal with each other, so trust between the 
    parties involved is essential.
    //
    Sociable network services play an important role, give information on participants.
    //
    Along with the background checks which carried out by platform providers, online reviews 
    and ratings are usually posted from both parties.
    //
    The remarkable thing is how well does the system usually work.`
        .split("//")
        .map((i) => i.replace(/\n/g, " ").replace(/ +/g, " ").trim());
    const b =
      `The sharing economy is an economic system based on sharing assets or services, for free or 
for a fee, directly from and between individuals.
//
Named in 2011 by TIME Magazine as one of the 10 ideas that would change the world, the 
economic model is now transforming the landscape of the world economy.
//
There are five key concepts of the sharing economy.
//
Here you can read about them, along with appropriate case stories casting light on what the 
sharing economy is and how it works.
//
Two young men in San Francisco were so poor they could not pay their rent, so they 
thought to rent out three air mattresses on their floor to people and serve them breakfast.
//
They made a simple website to promote their little bed and breakfast, and three people 
showed up, each paying $80.
//
What they started was a whole new business model providing a platform for the sharing 
economy.
//
Thanks to the Internet and digital technology, now there is much more data about people and 
things, which makes sharing cheaper and easier than ever.
//
You were able to rent a private room before the Internet, but it was usually more trouble 
than it was worth.
//
For example, without the Internet, how can you know that somebody has a spare room to 
your taste in a simple family house?
//
The website deals with all the rest, locating the right space and dealing with safety issues, 
reservations, and payment.
//
Hyeonwoo needed to install a new lighting fixture on his ceiling, but a power drill was too 
expensive to buy only for the occasion.
//
In Hyeonwoo's neighborhood, however, there lived someone that had a power drill but hadn't 
needed to use it for a long while.
//
A sharing website that matches owners and borrowers in the same area connected the two of 
them.
//
Hyeonwoo could borrow a power drill from his neighbor, paying a reasonable fee for using it.
//
Without the service, Hyeonwoo would have had no choice but to buy the expensive tool.
//
Now you can access what you need, even when you don't own it, all thanks to the sharing 
economy.
//
That is the principle behind a sharing economy that enables people to share cars, 
accommodations, and other items because now they can get whatever they need whenever 
they want.
//
The business model of a sharing economy instantly connects owners of underused assets with 
others willing to pay to use them.
//
Easy access, made possible by Internet technology, is now as good as ownership.
//
Seonwha is a computer programmer who works mostly at home but sometimes goes to the 
office to have meetings.
//
But for the sharing service, one more car would be made only to stay still in her garage 
most of the time.
//
In order to use her car more often, she would drive to places where she usually goes on 
foot now.
//
She thinks the sharing economy contributes to saving the environment since less car use 
means reduced CO₂ emissions.
//
Though not primarily driven by environmental goals, the sharing economy brings 
considerable benefits to the environment.
//
Resources are used more efficiently, which helps save on materials and energy.
//
For example, car sharing services are proven to yield environmentally friendly results.
//
Studies have found that car sharing helped reduce CO₂ emissions significantly.
//
What the sharing economy aspires to is a more sustainable way of utilizing limited resources.
//
Through a website sharing works of art, he picked an artwork to his taste from a wide 
variety of artists and rented it monthly.
//
He is not interested in permanent ownership of particular artworks.
//
Studies show that experience increases satisfaction far more than acquisitions do, and the 
new generation that embraces the sharing economy understands it better.
//
For instance, art lovers used to find satisfaction in collecting artworks.
//
Now they have begun to place value on the experience of enjoying them.
//
There are many who appreciate artworks, but have no interest in owning them for good.
//
This benefits the artists as well because they get a monthly income for their artworks that 
otherwise might be in storage or waiting for their next exhibition.
//
It is a powerful cultural trend in which people value experiences more than possessions.
//
Stella is a retired designer who started a second life as a host to international travelers.
//
When her husband passed away, she came down with depression.
//
She started to share the room her husband used to occupy.
//
Meeting new people from all over the world helped her recover from her grief.
//
Now she enjoys telling her guests stories about the neighborhood and preparing them 
delicious local breakfasts, trying to make them feel at home.
//
She has made friends with many guests and stays in touch with some of them.
//
For sociable souls, meeting new people is a big part of the charm.
//
But sharing assumes human interaction by its definition and appeals to the basic human 
needs for community.
//
The core of a sharing economy is people directly dealing with each other, so trust between 
the parties involved is essential.
//
Social network services play an important role, giving information on participants.
//
Along with the background checks carried out by platform providers, online reviews and 
ratings are usually posted by both parties.
//
The remarkable thing is how well the system usually works.
`
        .split("//")
        .map((i) => i.replace(/\n/g, " ").replace(/ +/g, " ").trim());

    const res = [];
    const ans = [];
    for (let i = 0; i < a.length; i++) {
      res.push(
        "다음 중 문맥상 어색한 어법, 어휘, 연결사 등 틀린 것을 모두 고르시오.{24}{질문}"
      );
      res.push(<br />);
      res.push(a[i]);
      res.push(<br />);
      res.push("{본문}{주관식}{문제}");
      res.push(<br />);
      ans.push(`1) ${b[i]}`);
    }
    res.push(ans);

    setData({
      str: str.value,
      seperator: seperator.value,
      res,
    });
  };

  return (
    <form onChange={handleForm}>
      <h3>숫자를 기준으로 나눌 수 있습니다</h3>
      <input type="text" name="seperator" value={data.seperator} />
      <label> 기준이 될 문자 ., ) 등을 입력하세요.</label>
      <br></br>
      <label>ex) [ 1. a 2. b 3. c ] 복사해서 확인해보세요.</label>
      <br />
      <label>ex) [ 1) a 2) b 3) c ] 복사해서 확인해보세요.</label>
      <hr />
      <textarea
        value={data.str}
        name={"str"}
        style={{ resize: "both", height: "20vh" }}
      ></textarea>
      <br />
      {data.res}
    </form>
  );
}
