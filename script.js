const franceTile = document.querySelector("#france");
const jamaicaTile = document.querySelector("#jamaica");
const mexicoTile = document.querySelector("#mexico")
const attractTile = document.querySelector("#attractions")

console.log("franceTile");
console.log("attractTile")

const inputField = document.querySelector("#search");

inputField.addEventListener("change", (e) => {
  console.log("Search submitted!");
  let search = inputField.value;
  console.log(search);
  if (search === "France" || search === "france") {
    franceTile.classList.remove("hidden");
    jamaicaTile.classList.add("hidden");
    attractTile.classList.remove("hidden");
  }else if (search === "jamaica" || search === "Jamaica") {
    jamaicaTile.classList.remove("hidden");
    franceTile.classList.add("hidden");
    attractTile.classList.remove("hidden")
    document.getElementById("attractionName1").innerHTML = "Dunn's River Falls and Park";
    document.getElementById("attractionTxt1").innerHTML = "Dunn's River Falls is a famous waterfall near Ocho Rios, Jamaica and a major Caribbean tourist attraction that receives thousands of visitors each year.";
    document.getElementById("attractionImg1").src = "https://www.beaches.com/blog/content/images/2022/04/Dunns-River-Falls-Ocho-Rios-Jamaica.jpg";
    document.getElementById("attractionName2").innerHTML = "Bob Marley Museum";
    document.getElementById("attractionTxt2").innerHTML = "The Bob Marley Museum is a museum in Kingston, Jamaica, dedicated to the reggae musician Bob Marley. The museum is located at 56 Hope Road, Kingston, and is Bob Marley's former place of residence. It was home to the Tuff Gong reggae record label which was founded by The Wailers in 1970. In 1976, it was the site of a failed assassination attempt on Bob Marley. There is a song called (56 Hope Road) from the album In the Pursuit of Leisure by Sugar Ray featuring Shaggy.popular for tourists.";
        document.getElementById("attractionImg2").src = "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/23/e1/6f.jpg";
    
    document.getElementById("attractionImg3").src = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTKoBxqUtED6A_YIHmfzOeqTl3LU8xMbc7Nv5LMM1yKO6FZqaLm_d0ETI6Pe7U9L0bCXGz4RgM9KhrQ6Fm0WXChAg";

    document.getElementById("attractionName3").innerHTML = "Rose Hall Great House";
    document.getElementById("attractionTxt3").innerHTML = "Rose Hall is a Jamaican Georgian plantation house now run as a historic house museum. It is located in Montego Bay, Jamaica with a panoramic view of the coast. Thought to be one of the country's most impressive plantation great houses, it had fallen into ruins by the 1960s, but was then restored. The museum showcases the slave history of the estate and the legend of the White Witch of Rose Hall..";

    document.getElementById("attractionImg4").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROyhWpwHqYghKkLsQbaDQlZR64Ph2iaLaJUIxhlbRSKpr_NiaBOO0GJ5QfF01upEVpshJX9NOmCrxsIvRjamQ7xA";

    document.getElementById("attractionName4").innerHTML = "Dolphin Cove Ocho Rios";
    document.getElementById("attractionTxt4").innerHTML = "Dolphin Cove Jamaica is a marine attraction in Jamaica at which guests can swim and interact with dolphins, sharks, and stingrays in their natural environment. Visitors may also interact with other species including iguanas, snakes and a variety of birds as well as other marine creatures in the Jungle Trail Walk. Dolphin Cove has been the recipient of many awards. The company operates three facilities on the island: Ocho Rios, Montego Bay, and Lucea, which is claimed to be the largest natural dolphin lagoon in the world.";
  }else if (search === "mexico" || search === "Mexico") {
    mexicoTile.classList.remove("hidden");
    franceTile.classList.add("hidden");
    jamaicaTile.classList.add("hidden");
    attractTile.classList.remove("hidden")
    document.getElementById("attractionName1").innerHTML = "Tulum Archaeological Zone";
    document.getElementById("attractionTxt1").innerHTML = "Tulum is the site of a pre-Columbian Mayan walled city which served as a major port for Coba, in the Mexican state of Quintana Roo. The ruins are situated on 12-meter-tall cliffs along the east coast of the Yucatán Peninsula on the Caribbean Sea. Tulum was one of the last cities built and inhabited by the Maya; it was at its height between the 13th and 15th centuries and managed to survive about 70 years after the Spanish began occupying Mexico. By the end of the 16th century, the site was abandoned. One of the best-preserved coastal Maya sites, Tulum is today a popular site for tourists.";
    document.getElementById("attractionImg1").src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkY18PAfR3C_pl84_3EaYxlojlZM9aTcTTFSDRA-9FTyu6WsyTamON8EMQi5J_HsX4jnUOOU8gPi-JSNeIUhR1ww";
    document.getElementById("attractionName2").innerHTML = "Frida Kahlo Museum";
    document.getElementById("attractionTxt2").innerHTML = "The Frida Kahlo Museum, also known as the Blue House for the structure's cobalt-blue walls, is a historic house museum and art museum dedicated to the life and work of Mexican artist Frida Kahlo. It is located in the Colonia del Carmen neighborhood of Coyoacán in Mexico City. The building was Kahlo's birthplace, the home where she grew up, lived with her husband Diego Rivera for a number of years, and where she later died in a room on the upper floor. In 1957, Diego Rivera donated the home and its contents in order to turn it into a museum in Frida's honor. The museum contains a collection of artwork by Frida Kahlo, Diego Rivera, and other artists along with the couple's Mexican folk art, pre-Hispanic artifacts, photographs, memorabilia, personal items, and more. The collection is displayed in the rooms of the house which remains much as it was in the 1950s. It is the most popular museum in Coyoacán and one of the most visited in Mexico City";
        document.getElementById("attractionImg2").src = "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTVOHay_uCiDCHpRZXgkYJSzWXfXxB7_fn3Z24-OVBlqbsGkq09jyr9kK-VfzHHtla871ONCiGdGBYk746AXoYuYw";
    
    document.getElementById("attractionImg3").src = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQt-sfjYFJoGAB_58bfVeRajaRR07hWbntqHKQz2WZhQ7GODSHpa00TNopilznQZ_9MzT2O0Yx-Li8m90ngE6Q0-g";

    document.getElementById("attractionName3").innerHTML = "Chichén Itzá";
    document.getElementById("attractionTxt3").innerHTML = "Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic through the Terminal Classic and into the early portion of the Postclassic period. The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands.";

    document.getElementById("attractionImg4").src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROyhWpwHqYghKkLsQbaDQlZR64Ph2iaLaJUIxhlbRSKpr_NiaBOO0GJ5QfF01upEVpshJX9NOmCrxsIvRjamQ7xA";

    document.getElementById("attractionName4").innerHTML = "Tours Acuáticos TravelArt Museum Booking Online";
    document.getElementById("attractionTxt4").innerHTML = "The Cancún Underwater Museum is a non-profit organization based in Cancún, Mexico devoted to the art of conservation. The museum has a total of 500 sculptures, by a series of international and local sculptors, with three different galleries submerged between three and six meters deep in the ocean at the Cancún National Marine Park. The museum was thought up by Marine Park Director Jaime González Cano, with the objective of saving the nearby coral reefs by providing an alternative destination for divers. It was started in 2009 and officially opened in November 2010.";
  }
  inputField.value = "";
});
