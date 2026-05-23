/*
  OBEDIENCE COMMAND - EDITABLE APP DATA
  ------------------------------------------------------
  Edit the starter content below in Notepad++ before uploading to GitHub.
  Keep commas, square brackets, curly brackets, and quotation marks in place.

  MONOGAMY TASKS ARE HERE:
  Find "monogamy" below. Each tier has:
  - husbandCards: cards where the husband is in charge
  - wifeCards: cards where the wife is in charge
  Change the title/text/coins freely.
*/
const defaultData = {
  profiles: { husbandName: "Rob", wifeName: "Charlotte" },
  stats: { coins: 0, xp: 0, streak: 0, completedToday: "" },
  tasks: [
    { title: "Daily Reset", text: "Complete one useful household job without being reminded.", coins: 10, xp: 10 },
    { title: "Respect Check", text: "Send a polite message confirming today’s priority task.", coins: 8, xp: 8 },
    { title: "Service Sprint", text: "Set a 20 minute timer and complete as much tidying as possible.", coins: 15, xp: 15 },
    { title: "Evening Report", text: "Give a short report: what was done, what was missed, and what needs attention tomorrow.", coins: 12, xp: 12 },
    { title: "Extra Mile", text: "Choose one task that makes your partner’s day easier and do it properly.", coins: 20, xp: 20 }
  ],
  rewards: [
    { title: "Small Favour", text: "Spend coins to request a small agreed favour.", cost: 25 },
    { title: "Choose the Film", text: "Pick the next film or show for the evening.", cost: 40 },
    { title: "Luxury Drink", text: "Claim a favourite drink or snack treat.", cost: 50 },
    { title: "Pass Token", text: "A one-time pass for a minor task, only if approved.", cost: 80 }
  ],
  forfeits: [
    { title: "Apology Note", text: "Write a short apology and explain how you’ll fix the missed task." },
    { title: "Double Duty", text: "Complete the missed task plus one extra useful job." },
    { title: "Coin Fine", text: "Lose 15 coins from the balance." },
    { title: "Reset Round", text: "Start the next day with the first task chosen by your partner." }
  ],
  monogamy: {
    currentTier: 1,
    rounds: 0,
    lastController: "None",
    tiers: [
      {
        tier: 1,
        name: "Warm Up",
        bonusCoins: 10,
        husbandCards: [
          { title: "Husband Leads", text: "Husband flip a coin, if its heads down your drink tails down a ltr of water." },
          { title: "Gentle Command", text: "Husband give one simple instruction that can be completed straight away." },
		  { title: "Husband Leads", text: "Husband feel your wife up from head to toe." },
          { title: "Pick the Pace", text: "Husband chooses what you wear for the rest of the night." },
		 { title: "Pick the Pace", text: "Husband pin your wife against the wall, kiss her passionately while feeling her up." }
        ],
       wifeCards: [
  { title: "Wife Leads", text: "Wife gently tease your husbands cock." },
  { title: "Queen’s Choice", text: "Wife tell your husband he cannot touch his own cock at all tonight, its yours tonight and yours alone extend it to a week if you want." },
  { title: "Wife Leads", text: "Wife Tell your husband to strip for the rest of the game." },
   { title: "Tease and denial", text: "Wife Tell your husband sit down and use your feet to play with his cock." },
  { title: "Mood Setter", text: "Wife decides if she plays with herself or with him." },
  { title: "matriarchy", text: "Wife tell your husband for the rest of the evening he will sit down to pee so you dont need to worry about pee on the seat." },
  { title: "Wife Leads", text: "Wife spank your husband 10 times hard with whatever you like." }
]
      },
      {
        tier: 2,
        name: "Getting Serious",
        bonusCoins: 15,
        husbandCards: [
          { title: "Husband’s Rule", text: "Husband bend over and asked to be spanked." },
          { title: "Challenge Pick", text: "Husband tell your wife to play with your cock." },
          { title: "Double or Nothing", text: "Husband get your wife to kneel and suck your cock." },
		  { title: "Double or Nothing", text: "Husband tell her to give you a small lap dance, no touching though so tie your hands behind your back." },
		   { title: "Double or Nothing", text: "Husband get your wife to sit on your cock." }
		  
        ],
        wifeCards: [
          { title: "Wife’s Rule", text: "Wife sets a temporary rule that lasts until the next card is flipped." },
          { title: "Command Card", text: "Wife chooses one either recive oral or give oral." },
		  { title: "Command Card", text: "Wife tie your husbands hands behind his back, sit him on a chair lube up his cock and tease him." },
          { title: "Inspection", text: "Wife choose a task for your husband to do." },
		  { title: "matriarchy", text: "Wife get a nipple pump, place it on your husband and twist, leave it on him for 5 minutes." },
		  { title: "matriarchy", text: "Wife bend over, tell your husband to get your favorite dildo and use it on you as you pleasure yourself, tell him to lick your pussy afterwards." },
		  { title: "matriarchy", text: "Wife ask your husband to choose one, either go commando for a day or wear your underwear for a day, whatever he chooses, do the next avalible day." }
        ]
      },
      {
        tier: 3,
        name: "High Stakes",
        bonusCoins: 25,
        husbandCards: [
          { title: "Husband Takes Control", text: "Husband controls the next full round and chooses the task conditions." },
          { title: "Prize Round", text: "Husband names a reward that can be earned by completing the card properly." },
		  { title: "Prize Round", text: "Husband bend your wife over and fuck her, but first roll a dice thats how long for, if the numbers odd lick her pussy after." },
          { title: "Commander Move", text: "Husband chooses a task, a time limit, and a success condition." },
		  { title: "Commander Move", text: "Husband gets to spank your wife 10 times with whatever she chooses." },
		  {title: "Devoted Oral Service", text: "Husband must please Wife with his mouth for a full 15 minutes in any position she chooses." },
		  { title: "Worship Session", text: "Husband flip a coin heads you spend 5 minutes kissing and worshipping Wife’s breasts, thighs, feet and ass tails she plays with your cock." }, 
		{ title: "Dildo Assistant", text: "Husband flip a coin heads you hold Wife’s legs or assists while she uses her dildo on herself, watching closely tails you use it on her."}
        ],
        
		wifeCards: [
       
  { title: "Consequence Edge", text: "Wife blindfold your husband, bend over and tell him to lick your pussy from behind." },
  { title: "Queen's Throne", text: "Wife face sits on Husbands face for 10 minutes while grind as well as just sitting." },
  { title: "Pleasure Controller", text: "Wife decides exactly how and when Husband is allowed to cum tonight." },
  { title: "Grinding Command", text: "Wife grinds on Husband's face, when your ready grab your dildo and put it in he can keep licking after its in." },
  { title: "Tease Mistress", text: "Wife teases Husband mercilessly remind him the only way he cums tonigh is by your hand not his." },
  { title: "Dildo Show", text: "Wife uses her dildo on herself while Husband watches and serves her." },
  { title: "Submission Request", text: "Wife, tell your husband to get your favorite dildo, place it between his legs, sit down on his cock bounce a little then get off and sit on the dildo hes positioned between his legs, tease his cok as you do." },
  { title: "Wife's Reward", text: "Wife ask your husband if he wants to finish on your breasts, the catch is he must afterwards suck and nibble your nipples until you finish, then clean you up." }
             ]
      }
    ]
  },
  knowledge: {
    challengeIdeas: [
      "To long have men dominated women, now its your turn to dominate, so next time he wants his cock sucked say no my pussy comes first get that tongue out.",
      "Use weekly themes such as service week, kindness week, tidy-home week, or date-night week.",
      "Keep tasks clear and measurable so there’s no sneaky loophole nonsense.",
      "Add a few surprise commands that can be drawn at random."
    ],
    forfeitIdeas: [
      "Use forfeits that are safe, agreed, and proportionate.",
      "Try practical consequences: extra chore, coin fine, apology note, or reset task.",
      "Avoid anything that would cause real resentment. Fun chaos, not actual warfare.",
      "Let the forfeit board be editable so it stays fresh."
    ],
    helpGuide: [
      "The app has three sections: Husband, Wife, and Monogamy. All live inside one app.",
      "Monogamy is a standalone card game: choose a tier, flip a random card, and the person shown controls that task.",
      "Hidden editor: tap the diamond on the start screen five times, or use the wife Control Room.",
      "Everything saves on the phone using local storage.",
      "For two phones, use Export Save on one phone and Import Save on the other.",
      "For true live syncing between phones, this can later be upgraded to Firebase."
    ]
  }
};

const STORAGE_KEY = "obedienceCommandSaveV3";
let app = loadApp();
let currentFeatured = null;
let currentMonogamyCard = null;
let lastRole = "portalScreen";
let secretCount = 0;
let currentKnowledgeTab = "challengeIdeas";
let currentEditorTab = "tasks";

const $ = (id) => document.getElementById(id);
const screens = document.querySelectorAll(".screen");

function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function normaliseApp(data){
  const fresh = clone(defaultData);
  const oldProfiles = data?.profiles || {};
  const merged = {
    ...fresh,
    ...data,
    profiles: {
      husbandName: oldProfiles.husbandName || oldProfiles.subName || fresh.profiles.husbandName,
      wifeName: oldProfiles.wifeName || oldProfiles.domName || fresh.profiles.wifeName
    },
    stats: { ...fresh.stats, ...(data?.stats || {}) },
    monogamy: { ...fresh.monogamy, ...(data?.monogamy || {}) },
    knowledge: { ...fresh.knowledge, ...(data?.knowledge || {}) }
  };
  if(!Array.isArray(merged.monogamy.tiers)) merged.monogamy.tiers = fresh.monogamy.tiers;
  return merged;
}
function loadApp(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem("obedienceCommandSaveV2") || localStorage.getItem("obedienceCommandSaveV1"));
    return saved ? normaliseApp(saved) : clone(defaultData);
  } catch { return clone(defaultData); }
}
function saveApp(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(app)); }
function showToast(msg){ const t=$("toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2600); }
function go(screenId){
  screens.forEach(s=>s.classList.remove("active"));
  $(screenId).classList.add("active");
  if(screenId === "husbandScreen" || screenId === "wifeScreen" || screenId === "monogamyScreen") lastRole = screenId;
  renderAll();
  window.scrollTo({top:0,behavior:"smooth"});
}
function goBack(){ go(lastRole || "portalScreen"); }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function rankForXp(xp){
  if(xp>=500) return ["Commander", 1000];
  if(xp>=250) return ["Elite", 500];
  if(xp>=100) return ["Trusted", 250];
  if(xp>=50) return ["Apprentice", 100];
  return ["Initiate", 50];
}
function earn(coins,xp){
  app.stats.coins += Number(coins||0);
  app.stats.xp += Number(xp||0);
  const t=todayKey();
  if(app.stats.completedToday!==t){ app.stats.streak += 1; app.stats.completedToday=t; }
  saveApp(); renderAll(); showToast(`Completed. +${coins} coins. Good work.`);
}
function spend(cost){
  cost=Number(cost||0);
  if(app.stats.coins<cost){ showToast("Not enough coins yet. Back to work, champion."); return false; }
  app.stats.coins-=cost; saveApp(); renderAll(); showToast(`Reward claimed. -${cost} coins.`); return true;
}
function setText(id, text){ const el=$(id); if(el) el.textContent=text; }
function renderStats(prefix=""){
  setText(prefix+"CoinCount", app.stats.coins);
  setText(prefix+"StreakCount", app.stats.streak);
  const [rank,next] = rankForXp(app.stats.xp);
  setText(prefix+"RankName", rank);
  setText(prefix+"RankProgress", `${app.stats.xp} / ${next} XP`);
}
function renderHome(){
  const husband = app.profiles.husbandName || "Husband";
  const wife = app.profiles.wifeName || "Wife";
  setText("portalTitle", `${husband} & ${wife}`);
  setText("husbandPortalName", husband);
  setText("wifePortalName", wife);
  setText("husbandTitle", `${husband}'s Dashboard`);
  setText("wifeTitle", `${wife}'s Dashboard`);
  renderStats("portal");
  renderStats("");
}
function makeItemCard(item,type,index){
  const card=document.createElement("article"); card.className="item-card";
  const value = type==="task" ? `${item.coins} coins` : type==="reward" ? `${item.cost} coins` : "forfeit";
  card.innerHTML=`<div class="item-head"><h3>${escapeHtml(item.title)}</h3><span class="pill">${escapeHtml(value)}</span></div><p>${escapeHtml(item.text)}</p>`;
  const row=document.createElement("div"); row.className="action-row";
  if(type==="task"){
    row.innerHTML=`<button class="primary small">Complete</button><button class="danger small">Missed</button>`;
    row.children[0].onclick=()=>earn(item.coins,item.xp);
    row.children[1].onclick=()=>showRandomForfeit(true);
  } else if(type==="reward"){
    row.innerHTML=`<button class="secondary small">Claim Reward</button>`;
    row.children[0].onclick=()=>spend(item.cost);
  } else {
    row.innerHTML=`<button class="danger small">Mark Assigned</button>`;
    row.children[0].onclick=()=>showToast("Forfeit assigned. The ledger has spoken.");
  }
  card.appendChild(row); return card;
}
function renderLists(){
  const taskList=$("taskList"); if(taskList){ taskList.innerHTML=""; app.tasks.forEach((x,i)=>taskList.appendChild(makeItemCard(x,"task",i))); }
  const rewardList=$("rewardList"); if(rewardList){ rewardList.innerHTML=""; app.rewards.forEach((x,i)=>rewardList.appendChild(makeItemCard(x,"reward",i))); }
  const forfeitList=$("forfeitList"); if(forfeitList){ forfeitList.innerHTML=""; app.forfeits.forEach((x,i)=>forfeitList.appendChild(makeItemCard(x,"forfeit",i))); }
}
function renderKnowledge(){
  document.querySelectorAll(".knowledge-tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===currentKnowledgeTab));
  const titles={challengeIdeas:"Challenge Ideas",forfeitIdeas:"Forfeit Ideas",helpGuide:"Help Guide"};
  const items=app.knowledge[currentKnowledgeTab]||[];
  $("knowledgeContent").innerHTML=`<h3>${titles[currentKnowledgeTab]}</h3><ul>${items.map(i=>`<li>${escapeHtml(i)}</li>`).join("")}</ul>`;
}
function getCurrentTier(){
  const tierNo = Number(app.monogamy.currentTier || 1);
  return app.monogamy.tiers.find(t=>Number(t.tier)===tierNo) || app.monogamy.tiers[0];
}
function renderMonogamy(){
  const tier = getCurrentTier();
  if(!tier) return;
  setText("monogamyTierLabel", `Tier ${tier.tier} — ${tier.name}`);
  setText("monogamyRounds", app.monogamy.rounds || 0);
  setText("monogamyLastController", app.monogamy.lastController || "None");
  setText("monogamyBonus", `+${tier.bonusCoins || 10}`);
  renderMonogamyDeckList();
}
function renderMonogamyDeckList(){
  const list=$("monogamyDeckList"); if(!list) return;
  list.innerHTML="";
  app.monogamy.tiers.forEach(tier=>{
    const block=document.createElement("article"); block.className="item-card deck-block";
    const husbandCards=(tier.husbandCards||[]).map(c=>`<li><strong>${escapeHtml(c.title)}</strong><br>${escapeHtml(c.text)}</li>`).join("");
    const wifeCards=(tier.wifeCards||[]).map(c=>`<li><strong>${escapeHtml(c.title)}</strong><br>${escapeHtml(c.text)}</li>`).join("");
    block.innerHTML=`<div class="item-head"><h3>Tier ${tier.tier} — ${escapeHtml(tier.name)}</h3><span class="pill">+${tier.bonusCoins||10} coins</span></div><h4>Husband Cards</h4><ul>${husbandCards}</ul><h4>Wife Cards</h4><ul>${wifeCards}</ul>`;
    list.appendChild(block);
  });
}
function flipMonogamyCard(){
  const tier = getCurrentTier();
  if(!tier){ showToast("No Monogamy tiers found. Add one in the editor."); return; }
  const wifeName = app.profiles.wifeName || "Wife";
  const husbandName = app.profiles.husbandName || "Husband";
  const side = Math.random() < 0.5 ? "husband" : "wife";
  const deck = side === "husband" ? (tier.husbandCards||[]) : (tier.wifeCards||[]);
  const card = pickRandom(deck);
  if(!card){ showToast(`No ${side} cards in this tier yet. Add some in the editor.`); return; }
  const controller = side === "husband" ? husbandName : wifeName;
  currentMonogamyCard = { ...card, controller, side, bonusCoins: Number(tier.bonusCoins||10), tier: tier.tier };
  app.monogamy.rounds = Number(app.monogamy.rounds||0) + 1;
  app.monogamy.lastController = controller;
  saveApp();
  setText("monogamyController", `${controller} is in charge`);
  setText("monogamyCardTitle", card.title);
  setText("monogamyCardText", card.text);
  $("monogamyCard").classList.add("flipped");
  renderMonogamy();
}
function completeMonogamyCard(){
  if(!currentMonogamyCard){ showToast("Flip a Monogamy card first."); return; }
  earn(currentMonogamyCard.bonusCoins, currentMonogamyCard.bonusCoins);
}
function resetMonogamyCard(){
  currentMonogamyCard=null;
  $("monogamyCard").classList.remove("flipped");
  setText("monogamyController", "Awaiting card");
  setText("monogamyCardTitle", "Ready?");
  setText("monogamyCardText", "Flip a card to choose who takes control of the next task.");
}
function resetMonogamyTier(){
  app.monogamy.currentTier = 1;
  app.monogamy.rounds = 0;
  app.monogamy.lastController = "None";
  saveApp();
  resetMonogamyCard();
  renderMonogamy();
  showToast("Monogamy reset back to Tier 1.");
}
function changeTier(direction){
  const tiers=app.monogamy.tiers.map(t=>Number(t.tier)).sort((a,b)=>a-b);
  const current=Number(app.monogamy.currentTier||tiers[0]||1);
  const index=Math.max(0, tiers.indexOf(current));
  const next=tiers[Math.min(tiers.length-1, Math.max(0, index+direction))];
  if(next===current){ showToast(direction>0 ? "Top tier already. Spicy ceiling reached." : "Already at tier one."); return; }
  app.monogamy.currentTier=next;
  saveApp(); resetMonogamyCard(); renderMonogamy();
}
function renderEditor(){
  document.querySelectorAll(".editor-tab").forEach(b=>b.classList.toggle("active",b.dataset.edit===currentEditorTab));
  const area=$("editorArea"); area.innerHTML="";
  if(["tasks","rewards","forfeits"].includes(currentEditorTab)){
    app[currentEditorTab].forEach((item,idx)=>area.appendChild(editCard(item,idx,currentEditorTab)));
    const add=document.createElement("button"); add.className="primary"; add.textContent="Add New";
    add.onclick=()=>{
      app[currentEditorTab].push(currentEditorTab==="tasks"?{title:"New Task",text:"Write the task here.",coins:10,xp:10}:currentEditorTab==="rewards"?{title:"New Reward",text:"Write the reward here.",cost:25}:{title:"New Forfeit",text:"Write the forfeit here."});
      saveApp(); renderEditor(); renderLists();
    };
    area.appendChild(add);
  } else if(currentEditorTab === "knowledge") {
    Object.keys(app.knowledge).forEach(key=>{
      const wrap=document.createElement("div"); wrap.className="edit-card";
      wrap.innerHTML=`<label>${key}</label><textarea>${app.knowledge[key].join("\n")}</textarea>`;
      wrap.querySelector("textarea").oninput=e=>{ app.knowledge[key]=e.target.value.split("\n").filter(Boolean); saveApp(); renderKnowledge(); };
      area.appendChild(wrap);
    });
  } else if(currentEditorTab === "monogamy") {
    renderMonogamyEditor(area);
  }
}
function renderMonogamyEditor(area){
  const help=document.createElement("div"); help.className="edit-card";
  help.innerHTML='<strong>PC editing tip:</strong><p>Open <code>script.js</code>, find <code>monogamy</code>, then edit the tier names, bonus coins, husbandCards and wifeCards. This live editor changes the saved copy on this device.</p>';
  area.appendChild(help);
  app.monogamy.tiers.forEach((tier,tierIndex)=>{
    const wrap=document.createElement("div"); wrap.className="edit-card tier-editor";
    wrap.innerHTML=`
      <label>Tier Number</label><input type="number" data-field="tier" value="${tier.tier}">
      <label>Tier Name</label><input data-field="name" value="${escapeAttr(tier.name)}">
      <label>Bonus Coins</label><input type="number" data-field="bonusCoins" value="${tier.bonusCoins||10}">
      <label>Husband Cards - one per line as Title | Task text</label><textarea data-deck="husbandCards">${(tier.husbandCards||[]).map(c=>`${c.title} | ${c.text}`).join("\n")}</textarea>
      <label>Wife Cards - one per line as Title | Task text</label><textarea data-deck="wifeCards">${(tier.wifeCards||[]).map(c=>`${c.title} | ${c.text}`).join("\n")}</textarea>
      <button class="danger small">Delete Tier</button>`;
    wrap.querySelectorAll("input").forEach(el=>el.oninput=e=>{
      tier[e.target.dataset.field]=e.target.type==="number"?Number(e.target.value):e.target.value;
      if(e.target.dataset.field==="tier") app.monogamy.currentTier=tier.tier;
      saveApp(); renderMonogamy();
    });
    wrap.querySelectorAll("textarea").forEach(el=>el.oninput=e=>{
      tier[e.target.dataset.deck]=parseDeckLines(e.target.value);
      saveApp(); renderMonogamy();
    });
    wrap.querySelector("button").onclick=()=>{
      if(app.monogamy.tiers.length<=1){ showToast("Keep at least one Monogamy tier."); return; }
      app.monogamy.tiers.splice(tierIndex,1);
      app.monogamy.currentTier=app.monogamy.tiers[0].tier;
      saveApp(); renderEditor(); renderMonogamy();
    };
    area.appendChild(wrap);
  });
  const add=document.createElement("button"); add.className="primary"; add.textContent="Add New Monogamy Tier";
  add.onclick=()=>{
    const next=(Math.max(...app.monogamy.tiers.map(t=>Number(t.tier)||0))+1)||1;
    app.monogamy.tiers.push({tier:next,name:"New Tier",bonusCoins:10,husbandCards:[{title:"New Husband Card",text:"Write the husband-controlled task here."}],wifeCards:[{title:"New Wife Card",text:"Write the wife-controlled task here."}]});
    app.monogamy.currentTier=next;
    saveApp(); renderEditor(); renderMonogamy();
  };
  area.appendChild(add);
}
function parseDeckLines(text){
  return text.split("\n").map(line=>line.trim()).filter(Boolean).map(line=>{
    const [title,...rest]=line.split("|");
    return { title:(title||"New Card").trim(), text:(rest.join("|")||"Write the task here.").trim() };
  });
}
function editCard(item,idx,type){
  const card=document.createElement("div"); card.className="edit-card";
  const numberField = type==="tasks" ? `<label>Coins</label><input type="number" data-field="coins" value="${item.coins}"><label>XP</label><input type="number" data-field="xp" value="${item.xp}">` : type==="rewards" ? `<label>Cost</label><input type="number" data-field="cost" value="${item.cost}">` : "";
  card.innerHTML=`<label>Title</label><input data-field="title" value="${escapeAttr(item.title)}"><label>Text</label><textarea data-field="text">${escapeHtml(item.text)}</textarea>${numberField}<button class="danger small">Delete</button>`;
  card.querySelectorAll("input,textarea").forEach(el=>el.oninput=e=>{ item[e.target.dataset.field]=e.target.type==="number"?Number(e.target.value):e.target.value; saveApp(); renderLists(); });
  card.querySelector("button").onclick=()=>{ app[type].splice(idx,1); saveApp(); renderEditor(); renderLists(); };
  return card;
}
function renderAll(includeEditor=true){ renderHome(); renderLists(); renderKnowledge(); renderMonogamy(); if(includeEditor) renderEditor(); }
function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function drawTask(target){
  currentFeatured=pickRandom(app.tasks);
  if(!currentFeatured){ showToast("No tasks yet. Add some in the editor."); return; }
  setText(target+"FeaturedTitle", currentFeatured.title);
  setText(target+"FeaturedText", currentFeatured.text);
  if(target === "husband"){
    setText("wifeFeaturedTitle", currentFeatured.title);
    setText("wifeFeaturedText", currentFeatured.text);
  } else {
    setText("husbandFeaturedTitle", currentFeatured.title);
    setText("husbandFeaturedText", currentFeatured.text);
  }
}
function completeFeatured(){
  if(!currentFeatured){ showToast("Pick a command first."); return; }
  earn(currentFeatured.coins,currentFeatured.xp);
}
function showRandomForfeit(verbose=false){
  const f=pickRandom(app.forfeits);
  if(f) showToast(verbose ? `Forfeit: ${f.title} — ${f.text}` : `Forfeit: ${f.title}`);
  else showToast("No forfeits yet. Add some in the editor.");
}
function escapeHtml(str=""){ return String(str).replace(/[&<>"]/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
function escapeAttr(str=""){ return escapeHtml(str).replace(/'/g,"&#039;"); }

$("startBtn").onclick=()=>{
  app.profiles.husbandName=$("husbandName").value.trim()||"Rob";
  app.profiles.wifeName=$("wifeName").value.trim()||"Charlotte";
  saveApp(); go("portalScreen");
};
$("husbandName").value=app.profiles.husbandName;
$("wifeName").value=app.profiles.wifeName;
$("secretTap").onclick=()=>{ secretCount++; if(secretCount>=5){ secretCount=0; lastRole="portalScreen"; go("editorScreen"); } };
$("portalSettingsBtn").onclick=()=>{ lastRole="portalScreen"; go("editorScreen"); };
$("husbandPortalBtn").onclick=()=>go("husbandScreen");
$("wifePortalBtn").onclick=()=>go("wifeScreen");
$("monogamyPortalBtn").onclick=()=>go("monogamyScreen");
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));
document.querySelectorAll(".toPortal").forEach(b=>b.onclick=()=>go("portalScreen"));
document.querySelectorAll(".backBtn").forEach(b=>b.onclick=()=>goBack());
document.querySelectorAll(".knowledge-tab").forEach(b=>b.onclick=()=>{ currentKnowledgeTab=b.dataset.tab; renderKnowledge(); });
document.querySelectorAll(".editor-tab").forEach(b=>b.onclick=()=>{ currentEditorTab=b.dataset.edit; renderEditor(); });
$("husbandDrawBtn").onclick=()=>drawTask("husband");
$("wifeDrawBtn").onclick=()=>drawTask("wife");
$("husbandCompleteBtn").onclick=completeFeatured;
$("wifeApproveBtn").onclick=completeFeatured;
$("husbandMissedBtn").onclick=()=>showRandomForfeit(true);
$("wifeForfeitBtn").onclick=()=>showRandomForfeit(true);
$("flipMonogamyBtn").onclick=flipMonogamyCard;
$("monogamyCard").onclick=flipMonogamyCard;
$("completeMonogamyBtn").onclick=completeMonogamyCard;
$("resetMonogamyBtn").onclick=resetMonogamyCard;
$("tierDownBtn").onclick=()=>changeTier(-1);
$("tierUpBtn").onclick=()=>changeTier(1);
$("resetMonogamyTierBtn").onclick = resetMonogamyTier;
$("exportBtn").onclick=()=>{ const blob=new Blob([JSON.stringify(app,null,2)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="obedience-command-save.json"; a.click(); URL.revokeObjectURL(a.href); };
$("importFile").onchange=e=>{ const file=e.target.files[0]; if(!file) return; const reader=new FileReader(); reader.onload=()=>{ try{ app=normaliseApp(JSON.parse(reader.result)); saveApp(); renderAll(); showToast("Save imported."); }catch{ showToast("Import failed. JSON looks wrong."); } }; reader.readAsText(file); };
$("resetBtn").onclick=()=>{ if(confirm("Reset everything back to starter content?")){ app=clone(defaultData); saveApp(); currentFeatured=null; currentMonogamyCard=null; renderAll(); resetMonogamyCard(); showToast("Reset complete."); } };
if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js").catch(()=>{}); }
renderAll();
