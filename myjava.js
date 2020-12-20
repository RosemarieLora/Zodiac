function zodiac(){
  var bMonth = document.getElementById("month").value;
   var bDay = document.getElementById("day").value;
 var ZodiacSign = "Please enter your bithdate first!";


if (bMonth == 1&& bDay >= 20 || bMonth == 2 && bDay <= 18
    ){
        ZodiacSign = ("Aquarius");
		document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1f8a9l-0d386338-f701-47c6-9fe5-3a6636955069.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWY4YTlsLTBkMzg2MzM4LWY3MDEtNDdjNi05ZmU1LTNhNjYzNjk1NTA2OS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jT2igpAo6dfUCqxJDHwH4aIq9LkK1YrQB9ZCRibKVqU'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Intelligent, inventive, humanistic, friendly, altruistic, sociable, and reformative";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Rebels without a cause, emotionally detached, scatterbrained, irresponsible and impersonal";
	
	}

    if (bMonth == 2&& bDay >= 19 || bMonth == 3&& bDay <= 20){
       ZodiacSign = ("Pisces");
		document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1f64jz-9f696530-fff5-4f93-a79a-a91fa1873ca8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWY2NGp6LTlmNjk2NTMwLWZmZjUtNGY5My1hNzlhLWE5MWZhMTg3M2NhOC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.M6-CxZFONSFed9kwmqvZJbgKlzvjdfGGeyZxY6Y_FEo'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Mystical, intuitive, imaginative, compassionate, sensitive and romantic";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Escapist, unrealistic, submissive, lethargic, self-pitying, lacking boundaries, dependent and codependent";
    
	}
   if (bMonth == 3&& bDay >= 21 || bMonth == 4 && bDay <= 19){
      ZodiacSign = ("Aries");
		document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1f63b0-1bc99005-79f7-4d48-b637-950261dc1136.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWY2M2IwLTFiYzk5MDA1LTc5ZjctNGQ0OC1iNjM3LTk1MDI2MWRjMTEzNi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mkuu52iTOcMHCefNFnjVaund3Ykjl-xEIlfjXyHmwq4'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Brave, powerful, direct, independent, strong sense of justice, innocent, assertive, fearless, head-strong";
		document.getElementById("weaknesses").innerHTML= " Weaknesses: Aggressive, self-centered, blunt, pushy, inconsistent, selfish, loud, domineering, bad-tempered";
   }
  
    if (bMonth == 4&& bDay >= 20|| bMonth == 5 && bDay <= 20){
       ZodiacSign = ("Taurus");
       document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1f62mf-11a0b6af-be78-4655-9450-24bdd81f1a7f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWY2Mm1mLTExYTBiNmFmLWJlNzgtNDY1NS05NDUwLTI0YmRkODFmMWE3Zi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.60KiOOJ2R8QILPlJw80zeziF2PTjwCPmH6Byeb17P-Q'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Steady, driven, tenacious, patient, enduring, persistent, solid, determined, trustworthy, tasteful";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Materialistic, resistant to change, fanatical, indulgent, gluttonous, possessive, stubborn, narrow-minded";
	 
    }
  
    if (bMonth == 5&& bDay >= 21 || bMonth == 6 && bDay <= 20
     ){
       ZodiacSign = ("Gemini");
        document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1fcms6-30b7dcf5-61f5-4d59-b8f8-7a0da64b529c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWZjbXM2LTMwYjdkY2Y1LTYxZjUtNGQ1OS1iOGY4LTdhMGRhNjRiNTI5Yy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9Xu-sSg9tfMGVdY8hHL2_1DH_iuN1GM7oUVRKfvA3kE'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Intelligent, Adaptable, Agile, Communicative, Informative, Connected";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Talkative, Exaggerating, Deceptive, Cunning, Superficial, Inconsistent";
    }
  
    if (bMonth == 6&& bDay >= 21 || bMonth == 7&& bDay <= 22){
        ZodiacSign = ("Cancer");
        document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d29glp3-2df7760e-0c45-4818-810c-0b5545d48ec1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMjlnbHAzLTJkZjc3NjBlLTBjNDUtNDgxOC04MTBjLTBiNTU0NWQ0OGVjMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3rMxBqU5vebiFU2DgnjUCsEjGEP0nB_iX7nUYJUYMsU'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Nurturing, Supportive, Healing, Compassionate, Unconditionally Loving";
		document.getElementById("weaknesses").innerHTML= " Weaknesses: Dependent, Indirect, Moody, Passive Aggressive, Unable To Let Go";
    
	}
    if (bMonth == 7&& bDay >= 23 || bMonth == 8 && bDay <= 22){
       ZodiacSign = ("Leo");
       document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1f67l2-ea023b5b-cda5-47d3-a5c6-0971818af466.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWY2N2wyLWVhMDIzYjViLWNkYTUtNDdkMy1hNWM2LTA5NzE4MThhZjQ2Ni5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.t7C7Q_crHBn_xSwEarZP2H1s0hyPV5w3WPcGw0GKViI'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Brave, Playful, Leader, Fun, Warm, Protective, Generous, Charismatic";
		document.getElementById("weaknesses").innerHTML= " Weaknesses: Egotistical, Dominating, Stubborn, Controlling, A Show-off, Vain";
    
	}
    if (bMonth == 8 && bDay >= 23 || bMonth == 9 && bDay <= 22){
        ZodiacSign = ("Virgo");
        document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1fclrg-79831bd4-9185-49b7-969a-8a29582989ab.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWZjbHJnLTc5ODMxYmQ0LTkxODUtNDliNy05NjlhLThhMjk1ODI5ODlhYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5J9UIbZwteAjyQVf4E4EJ8VjNFNnrWZh7_qyY-LNVuY'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Humble, altruistic, logical, responsible, organized, orderly, modest, devoted";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Obsessive, critical, excessive attention to insignificant details, perfectionist";
    
	}
    if (bMonth == 9&& bDay >= 23 || bMonth == 10&& bDay <= 22){
      ZodiacSign = ("Libra");
       document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1fcjzm-e217eea7-fb9d-42d3-94cb-5bc0def17efe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWZjanptLWUyMTdlZWE3LWZiOWQtNDJkMy05NGNiLTViYzBkZWYxN2VmZS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-s9PiMwA6Sybg5q1lqs16SMMEXY4aCFDIsTIdmP90_c'width=12%>";
       document.getElementById("strengths").innerHTML="Strengths:Mystical, intuitive, imaginative, compassionate, sensitive and romantic.";
	   document.getElementById("weaknesses").innerHTML="Weaknesses: Escapist, unrealistic, submissive, lethargic, self-pitying, lacking boundaries, dependent and codependen";
	
	}
    if (bMonth == 10 && bDay >= 23|| bMonth == 11 && bDay <= 21){
      ZodiacSign = ("Scorpio");
        document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1f87sf-fb9001bd-da35-4bb8-9843-022395bd7e19.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWY4N3NmLWZiOTAwMWJkLWRhMzUtNGJiOC05ODQzLTAyMjM5NWJkN2UxOS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fPmZfQevhtCuVyU3d1ygBPVM6OmO7rTjed6MWuPK9so'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Passionate, Driven, Perceptive, Emotional, Sacrificing, Determined";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Vindictive, Paranoid, Destructive, Possessive, Jealous, Clingy";
    }
	
    if (bMonth == 11 && bDay >= 22 || bMonth == 12 && bDay <= 21){
       ZodiacSign = ("Sagittarius");
        document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1fckjm-01ca7acc-c9fc-44ad-ba44-dc08feee24e8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWZja2ptLTAxY2E3YWNjLWM5ZmMtNDRhZC1iYTQ0LWRjMDhmZWVlMjRlOC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iIW9wxrYuCFyjbUVMM0OLQoXxI8IdTeR88qAX9z4mhg'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Ambitious, Lucky, Moral, Optimistic, Enthusiastic, Open-minded, Versatile";
		document.getElementById("weaknesses").innerHTML=  "Weaknesses: Gluttonous, Lazy, Restless, Irresponsible, Blindly Optimistic, Tactless";
    }
  
  if(bMonth == 12 && bDay >= 22 || bMonth == 1 && bDay <= 19){
       ZodiacSign = ("Capricorn");
        document.getElementById("image").innerHTML="<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108fe05f-8fda-4e23-a367-a82912313633/d1fcna6-41445b0b-63b8-409e-b438-31f9458a9ccd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTA4ZmUwNWYtOGZkYS00ZTIzLWEzNjctYTgyOTEyMzEzNjMzXC9kMWZjbmE2LTQxNDQ1YjBiLTYzYjgtNDA5ZS1iNDM4LTMxZjk0NThhOWNjZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vxSUeVosRt9QEq3ErTfU9IfK3sbV8gwNw1fZ6AbBTrY'width=12%>";
		document.getElementById("strengths").innerHTML= "Strengths: Driven, patient, strategic, determined, disciplined, reliable, responsible and persistent";
		document.getElementById("weaknesses").innerHTML= "Weaknesses: Pessimistic, greedy, cynical, fearful, ruthless in achieving a goal, rigid, and miserly";
	
    }else if (bMonth>12||bDay>31){
       alert("Enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= ZodiacSign;
}
  
 

  
