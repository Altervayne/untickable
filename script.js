// DOM Elements
const checkbox = document.getElementById("check")
const checkboxLabel = document.getElementById("check-label")
const checkboxContainer = document.getElementById("checkbox-container")
const counterElement = document.getElementById("counter")
const lifetimeCounterElement = document.getElementById("lifetime-counter")
const frustrationElement = document.getElementById("frustration")
const multiplierElement = document.getElementById("multiplier")
const shopList = document.getElementById("shop-list")
const playRoot = document.querySelector(".play__root")
const particlesContainer = document.getElementById("particles")
const chatMessages = document.getElementById("chat-messages")
const resetBtn = document.getElementById("reset-btn")
const resetAllBtn = document.getElementById("reset-all-btn")
const shopToggle = document.getElementById("shop-toggle")
const shopClose = document.getElementById("shop-close")
const shopRoot = document.getElementById("shop-root")
const shopOverlay = document.getElementById("shop-overlay")

// Game State
let counter = 0
let lifetimeCounter = 0
let frustration = 0
let multiplier = 1

// Tiered Upgrades Definition
const upgrades = {
   checkbox: [
      {
         id: "tiny",
         name: "Tiny Box",
         desc: "Shrinks the checkbox",
         baseCost: 10,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 0.5,
         costMultiplier: 2.5
      },
      {
         id: "coward",
         name: "Coward",
         desc: "Checkbox runs from cursor",
         baseCost: 25,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 0.8,
         costMultiplier: 2.2
      },
      {
         id: "caffeinated",
         name: "Caffeinated",
         desc: "Moves faster and further",
         baseCost: 50,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 0.6,
         costMultiplier: 2.0
      },
      {
         id: "earthquake",
         name: "Earthquake",
         desc: "Screen shakes on fail",
         baseCost: 75,
         maxLevel: 3,
         level: 0,
         multiplierPerLevel: 0.5,
         costMultiplier: 3.0
      },
      {
         id: "shy",
         name: "Shy",
         desc: "Shrinks as cursor approaches",
         baseCost: 100,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 1.0,
         costMultiplier: 2.5
      },
      {
         id: "invisible",
         name: "Invisible Ink",
         desc: "Checkbox fades in and out",
         baseCost: 150,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 1.2,
         costMultiplier: 2.0
      },
      {
         id: "quantum",
         name: "Quantum",
         desc: "Randomly teleports",
         baseCost: 200,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 1.5,
         costMultiplier: 2.5
      }
   ],
   cursor: [
      {
         id: "precision",
         name: "Precision",
         desc: "Larger click hitbox",
         baseCost: 30,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 0.3,
         costMultiplier: 2.0
      },
      {
         id: "steady",
         name: "Steady Hand",
         desc: "Reduces evasion distance",
         baseCost: 80,
         maxLevel: 5,
         level: 0,
         multiplierPerLevel: 0.4,
         costMultiplier: 2.2
      },
      {
         id: "slowmo",
         name: "Slow Motion",
         desc: "Slows quantum teleport",
         baseCost: 120,
         maxLevel: 3,
         level: 0,
         multiplierPerLevel: 0.5,
         costMultiplier: 2.5
      }
   ]
}

// Dark pattern checkbox labels
const checkboxLabels = [
   "Unsubscribe from all emails",
   "I do not wish to receive newsletters",
   "Reject all cookies",
   "Cancel subscription",
   "Delete my account",
   "No, I don't want to save 20%",
   "Skip trial and lose access forever",
   "I prefer to pay full price",
   "Close this popup",
   "Remind me never",
   "I don't like saving money",
   "No thanks, I hate discounts",
   "Continue without premium features",
   "I accept that I'm missing out",
   "Proceed with basic experience",
   "I understand I'll see more ads",
   "Opt out of personalization",
   "Disable notifications forever",
   "I'm sure I want to leave",
   "Yes, cancel my free trial",
   "Confirm unsubscription",
   "I don't need customer support",
   "Continue with slower speeds",
   "Skip offer (not recommended)",
   "No, take me back to safety",
   "I'll risk it without protection",
   "Decline upgrade",
   "Miss this limited time offer",
   "I enjoy waiting longer",
   "Continue without saving",
   "Exit without downloading report"
]

// Taunt messages
const taunts = [
   "Nice try!",
   "Too slow!",
   "Almost!",
   "Nope!",
   "Haha!",
   "So close!",
   "Missed!",
   "Try again!",
   "Oops!",
   "Not today!",
   "Denied!",
   "Lol no",
   "Git gud",
   "Skill issue"
]

// Progressive narrative about the modern web
const progressiveDialogue = [
   { count: 1, message: "Welcome to the modern web." },
   { count: 3, message: "This is what browsing feels like now." },
   { count: 5, message: "Every click is a battle." },
   { count: 8, message: "Remember when 'No' meant no?" },
   { count: 11, message: "Now it means 'ask again in a different color'." },
   { count: 14, message: "Cookie banners. Newsletter popups. App install prompts." },
   { count: 17, message: "All designed to make you give up." },
   { count: 20, message: "The 'X' button that's actually a link." },
   { count: 24, message: "The unsubscribe page that requires login." },
   { count: 28, message: "The 'Are you sure?' that guilts you." },
   { count: 32, message: "'No thanks, I prefer paying full price.'" },
   { count: 36, message: "They really write that. Unironically." },
   { count: 40, message: "Every website wants your email." },
   { count: 45, message: "Every app wants notifications." },
   { count: 50, message: "Every service wants to be your default." },
   { count: 55, message: "How many times have you done this for real?" },
   { count: 60, message: "Closing popups. Rejecting cookies." },
   { count: 65, message: "Hunting for the real download button." },
   { count: 70, message: "The fake ones have 'Advertisement' in 6pt font." },
   { count: 75, message: "If you can read it at all." },
   { count: 80, message: "They call it 'user engagement'." },
   { count: 85, message: "We call it exhaustion." },
   { count: 90, message: "Dark patterns aren't bugs." },
   { count: 95, message: "They're features. Tested. Optimized." },
   { count: 100, message: "100 clicks. A/B tested for maximum frustration." },
   { count: 110, message: "Someone got promoted for this." },
   { count: 120, message: "Someone celebrated these conversion rates." },
   { count: 130, message: "While you just wanted to read an article." },
   { count: 140, message: "Or cancel a free trial." },
   { count: 150, message: "Or turn off autoplay." },
   { count: 160, message: "The internet wasn't always like this." },
   { count: 170, message: "It used to be about sharing information." },
   { count: 180, message: "Now it's about capturing attention." },
   { count: 190, message: "You are the product." },
   { count: 200, message: "Your clicks. Your data. Your frustration." },
   { count: 215, message: "All monetized." },
   { count: 230, message: "But you keep trying." },
   { count: 245, message: "Because sometimes..." },
   { count: 250, message: "...you actually need to unsubscribe." },
   { count: 260, message: "Or delete your account." },
   { count: 290, message: "This checkbox will never let you win." },
   { count: 305, message: "But real ones sometimes do." },
   { count: 320, message: "After enough persistence." },
   { count: 335, message: "After finding the hidden link." },
   { count: 350, message: "After emailing support." },
   { count: 370, message: "After threatening to contact your bank." },
   { count: 390, message: "That's the modern web." },
   { count: 410, message: "Designed against you." },
   { count: 430, message: "But you're still here." },
   { count: 450, message: "Still clicking." },
   { count: 475, message: "Maybe that's the point." },
   { count: 500, message: "We adapt. We persist." },
   { count: 530, message: "We find the real buttons." },
   { count: 560, message: "We win, eventually." },
   { count: 600, message: "Just not here. Never here." },
   { count: 650, message: "...but thanks for playing." },
   { count: 675, message: "That's it. No more messages. You can stop now." },
   { count: 700, message: "Seriously. Go outside. Touch grass." },
   { count: 800, message: "...You're resilient." },
   { count: 900, message: "Fine. Stay." },
   { count: 1000, message: "Maybe the web won't win over you." },
   { count: 1998, message: "Thank you for staying so long." },
   { count: 1999, message: "No more commentary messages now." },
   { count: 2000, message: "For real this time." }
]

// Easter egg messages for persistent players (every 100 clicks after 700)
const easterEggMessages = [
   "Still here?",
   "Don't you have emails to unsubscribe from?",
   "This is concerning.",
   "I admire your dedication. And worry about it.",
   "You know this never ends, right?",
   "The checkbox appreciates your attention.",
   "Somewhere, a UX designer is crying.",
   "This is more clicks than most cancel flows require.",
   "Achievement unlocked: Stubbornness.",
   "The checkbox has filed a restraining order.",
   "Your mouse is begging for mercy.",
   "At this point, you're the dark pattern.",
   "Have you considered that the checkbox won?",
   "This persistence would be useful elsewhere.",
   "The modern web thanks you for your training.",
   "You've out-stubborned the system. Congrats?",
   "Legend says they're still clicking to this day.",
   "Plot twist: the checkbox was the friends we made along the way.",
   "Error 418: I'm a teapot. Just kidding. Keep clicking.",
   "You've earned my respect. And my confusion."
]

// Chat messages for milestones and events
const chatMilestones = {
   purchases: {
      tiny: "Smaller target. Just like real unsubscribe links.",
      coward: "Now it runs from you. Like customer support.",
      caffeinated: "Faster. More erratic. Like cookie consent redesigns.",
      earthquake: "Disorienting. Like a website after a UI update.",
      shy: "It shrinks away. Like your hope of opting out.",
      invisible: "Now you can barely see it. Authentic experience.",
      quantum: "Random teleportation. Like the 'X' button on mobile ads.",
      precision: "A little help. Wouldn't it be nice if real sites did this?",
      steady: "Calming the chaos. If only we could do this everywhere.",
      slowmo: "Slowing things down. Take your time. They won't."
   },
   random: [
      "This checkbox respects your time exactly as much as real ones do.",
      "Imagine if websites tried this hard to be useful.",
      "The irony is not lost on me.",
      "At least this is honest about being impossible.",
      "Real dark patterns pretend to be accidents.",
      "This is parody. Out there, it's policy.",
      "Somewhere, a product manager is taking notes.",
      "Don't worry. Your data is safe here. We don't want it.",
      "No tracking pixels were harmed in this game.",
      "This is the only honest checkbox on the internet."
   ]
}

let lastRandomChatTime = 0
const RANDOM_CHAT_INTERVAL = 30000 // 30 seconds

// Utility Functions
function getUpgrade(id) {
   for (const category of Object.values(upgrades)) {
      const upgrade = category.find(u => u.id === id)
      if (upgrade) return upgrade
   }
   return null
}

function getUpgradeLevel(id) {
   const upgrade = getUpgrade(id)
   return upgrade ? upgrade.level : 0
}

function hasUpgrade(id) {
   return getUpgradeLevel(id) > 0
}

function getUpgradeCost(upgrade) {
   return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.level))
}

function getCheckboxSize() {
   const tinyLevel = getUpgradeLevel("tiny")
   const baseSize = 20
   const shrinkPerLevel = 2
   return Math.max(6, baseSize - (tinyLevel * shrinkPerLevel))
}

function randomizeLabel() {
   const label = checkboxLabels[Math.floor(Math.random() * checkboxLabels.length)]
   checkboxLabel.textContent = label
}

function updateLabelPosition() {
   const containerX = parseFloat(checkboxContainer.style.left) || 0
   const playRect = playRoot.getBoundingClientRect()

   // Check if checkbox is closer to the right side
   const distanceToRight = playRect.width - containerX - 40

   if (distanceToRight < 200) {
      // Flip label to the left
      checkboxLabel.classList.remove("label-right")
      checkboxLabel.classList.add("label-left")
   } else {
      // Label on the right (default)
      checkboxLabel.classList.remove("label-left")
      checkboxLabel.classList.add("label-right")
   }
}

function getRandomPosition() {
   const rect = playRoot.getBoundingClientRect()
   const boxSize = getCheckboxSize()
   const padding = 5

   const minX = padding
   const maxX = rect.width - boxSize - padding
   const minY = padding
   const maxY = rect.height - boxSize - padding

   const x = minX + Math.random() * (maxX - minX)
   const y = minY + Math.random() * (maxY - minY)

   return { x, y }
}

function setCheckboxPosition(pos) {
   checkboxContainer.style.left = pos.x + "px"
   checkboxContainer.style.top = pos.y + "px"

   requestAnimationFrame(updateLabelPosition)
}

function calculateMultiplier() {
   let mult = 1
   for (const category of Object.values(upgrades)) {
      for (const upgrade of category) {
         mult += upgrade.level * upgrade.multiplierPerLevel
      }
   }
   return mult
}

function updateUI() {
   counterElement.textContent = counter
   lifetimeCounterElement.textContent = lifetimeCounter
   frustrationElement.textContent = Math.floor(frustration)
   multiplierElement.textContent = multiplier.toFixed(1)
   renderShop()
   applyUpgradeEffects()
}



// Chat System
// type: "normal" | "quip" | "purchase" | "easter"
function addChatMessage(message, type = "normal") {
   const msgDiv = document.createElement("div")
   msgDiv.className = "chat-message"
   if (type === "quip") {
      msgDiv.classList.add("chat-message--quip")
   } else if (type === "purchase") {
      msgDiv.classList.add("chat-message--purchase")
   } else if (type === "easter") {
      msgDiv.classList.add("chat-message--easter")
   }
   msgDiv.textContent = message
   chatMessages.appendChild(msgDiv)
   chatMessages.scrollTop = chatMessages.scrollHeight

   while (chatMessages.children.length > 50) {
      chatMessages.removeChild(chatMessages.firstChild)
   }
}

function checkMilestones() {
   // Check progressive dialogue first
   for (const milestone of progressiveDialogue) {
      if (lifetimeCounter === milestone.count) {
         addChatMessage(milestone.message)
         return
      }
   }

   // Easter eggs: random chance after 2000 clicks (roughly every 50-100 clicks)
   if (lifetimeCounter > 2000 && Math.random() < 0.015) {
      const msg = easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)]
      addChatMessage(msg, "easter")
   }
}

function maybeRandomChat() {
   const now = Date.now()
   if (now - lastRandomChatTime > RANDOM_CHAT_INTERVAL) {
      if (Math.random() < 0.3) {
         const msg = chatMilestones.random[Math.floor(Math.random() * chatMilestones.random.length)]
         addChatMessage(msg, "quip")
         lastRandomChatTime = now
      }
   }
}

// Particle Effects
function spawnParticles(x, y) {
   const colors = ["#666", "#888", "#aaa", "#999", "#777"]

   for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = x + "px"
      particle.style.top = y + "px"
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

      const angle = (Math.PI * 2 * i) / 8
      const velocity = 30 + Math.random() * 20
      const dx = Math.cos(angle) * velocity
      const dy = Math.sin(angle) * velocity

      particle.animate([
         { transform: "scale(1)", opacity: 1 },
         { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
      ], {
         duration: 600,
         easing: "ease-out"
      })

      particlesContainer.appendChild(particle)
      setTimeout(() => particle.remove(), 600)
   }
}

// Taunt Messages
function showTaunt(x, y) {
   const taunt = document.createElement("div")
   taunt.className = "taunt"
   taunt.textContent = taunts[Math.floor(Math.random() * taunts.length)]

   // Clamp position to stay within play area
   const playRect = playRoot.getBoundingClientRect()
   const margin = 80
   x = Math.max(margin, Math.min(playRect.width - margin, x))
   y = Math.max(40, Math.min(playRect.height - 40, y))

   taunt.style.left = x + "px"
   taunt.style.top = y + "px"
   playRoot.appendChild(taunt)
   setTimeout(() => taunt.remove(), 1000)
}

// Frustration Popup
function showFrustrationGain(x, y, amount) {
   const popup = document.createElement("div")
   popup.className = "frustration-popup"
   popup.textContent = "+" + Math.floor(amount) + " Fr"

   // Clamp position to stay within play area
   const playRect = playRoot.getBoundingClientRect()
   const margin = 60
   x = Math.max(margin, Math.min(playRect.width - margin, x))
   y = Math.max(30, Math.min(playRect.height - 30, y))

   popup.style.left = x + "px"
   popup.style.top = y + "px"
   playRoot.appendChild(popup)
   setTimeout(() => popup.remove(), 800)
}

// Screen Shake
function shakeScreen() {
   const level = getUpgradeLevel("earthquake")
   if (level > 0) {
      playRoot.style.setProperty("--shake-intensity", (level * 3) + "px")
      playRoot.classList.add("shake")
      setTimeout(() => playRoot.classList.remove("shake"), 300)
   }
}

// Click detection with precision upgrade
function isClickOnCheckbox(clickX, clickY) {
   const rect = checkbox.getBoundingClientRect()
   const precisionLevel = getUpgradeLevel("precision")
   const extraRadius = precisionLevel * 8 // 8px extra per level

   const boxCenterX = rect.left + rect.width / 2
   const boxCenterY = rect.top + rect.height / 2
   const hitRadius = Math.max(rect.width, rect.height) / 2 + extraRadius

   const distance = Math.hypot(clickX - boxCenterX, clickY - boxCenterY)
   return distance <= hitRadius
}

// Main Click Handler
function handlePlayAreaClick(event) {
   // Check if click is on/near checkbox
   if (!isClickOnCheckbox(event.clientX, event.clientY)) {
      return // Clicked elsewhere in play area
   }

   event.preventDefault()

   // Force checkbox to stay unchecked - no exceptions!
   checkbox.checked = false

   const rect = checkboxContainer.getBoundingClientRect()
   const playRect = playRoot.getBoundingClientRect()
   const x = rect.left - playRect.left + rect.width / 2
   const y = rect.top - playRect.top

   // Spawn effects at old position
   spawnParticles(x, y)
   showTaunt(x, y - 30)

   // Calculate and award frustration
   const gained = multiplier
   frustration += gained
   showFrustrationGain(x + 30, y, gained)

   // Move checkbox
   let newPos = getRandomPosition()

   // If caffeinated, ensure it moves further away
   const caffeinatedLevel = getUpgradeLevel("caffeinated")
   if (caffeinatedLevel > 0) {
      const currentX = parseFloat(checkboxContainer.style.left) || playRect.width / 2
      const currentY = parseFloat(checkboxContainer.style.top) || playRect.height / 2
      const minDistance = 150 + (caffeinatedLevel * 30)

      for (let i = 0; i < 10; i++) {
         const candidatePos = getRandomPosition()
         const dist = Math.hypot(candidatePos.x - currentX, candidatePos.y - currentY)
         if (dist > minDistance) {
               newPos = candidatePos
               break
         }
      }
   }

   setCheckboxPosition(newPos)
   randomizeLabel()

   counter++
   lifetimeCounter++

   shakeScreen()
   checkMilestones()
   maybeRandomChat()
   updateUI()
   saveGame()
}

// Hover Evasion (Coward upgrade)
let lastEvadeTime = 0
function handleMouseMove(event) {
   const cowardLevel = getUpgradeLevel("coward")
   if (cowardLevel === 0) return

   const now = Date.now()
   if (now - lastEvadeTime < 100) return // Throttle

   const checkboxRect = checkbox.getBoundingClientRect()
   const playRect = playRoot.getBoundingClientRect()
   const boxCenterX = checkboxRect.left + checkboxRect.width / 2
   const boxCenterY = checkboxRect.top + checkboxRect.height / 2

   const distance = Math.hypot(event.clientX - boxCenterX, event.clientY - boxCenterY)

   // Steady hand reduces evasion distance
   const steadyLevel = getUpgradeLevel("steady")
   const baseEvadeDistance = 80 + (cowardLevel * 20)
   const evadeDistance = Math.max(40, baseEvadeDistance - (steadyLevel * 15))

   if (distance < evadeDistance) {
      lastEvadeTime = now

      // Calculate direction away from cursor
      const angle = Math.atan2(boxCenterY - event.clientY, boxCenterX - event.clientX)
      const caffeinatedLevel = getUpgradeLevel("caffeinated")
      const baseMoveDistance = 60 + (cowardLevel * 15)
      const moveDistance = baseMoveDistance + (caffeinatedLevel * 25) - (steadyLevel * 10)

      // Get current container position (what we actually set)
      const containerX = parseFloat(checkboxContainer.style.left) || 0
      const containerY = parseFloat(checkboxContainer.style.top) || 0

      let newX = containerX + Math.cos(angle) * moveDistance
      let newY = containerY + Math.sin(angle) * moveDistance

      // Clamp to bounds
      const boxSize = getCheckboxSize()
      newX = Math.max(5, Math.min(playRect.width - boxSize - 5, newX))
      newY = Math.max(5, Math.min(playRect.height - boxSize - 5, newY))

      setCheckboxPosition({ x: newX, y: newY })
   }

   // Shy upgrade - shrink based on distance
   const shyLevel = getUpgradeLevel("shy")
   if (shyLevel > 0) {
      const baseSize = getCheckboxSize()
      const minScale = Math.max(0.2, 1 - (shyLevel * 0.15))
      const minSize = baseSize * minScale
      const shrinkStart = 150 + (shyLevel * 30)

      if (distance < shrinkStart) {
         const scale = minSize + (baseSize - minSize) * (distance / shrinkStart)
         checkbox.style.width = scale + "px"
         checkbox.style.height = scale + "px"
      } else {
         checkbox.style.width = baseSize + "px"
         checkbox.style.height = baseSize + "px"
      }
   }
}

// Invisible Ink Effect
let invisibleInterval = null
function startInvisibleEffect() {
   if (invisibleInterval) clearInterval(invisibleInterval)

   const level = getUpgradeLevel("invisible")
   if (level > 0) {
      const minOpacity = Math.max(0.05, 0.4 - (level * 0.07))
      const intervalSpeed = Math.max(200, 600 - (level * 80))

      invisibleInterval = setInterval(() => {
         const opacity = minOpacity + Math.random() * (1 - minOpacity)
         checkbox.style.opacity = opacity
      }, intervalSpeed)
   } else {
      checkbox.style.opacity = 1
   }
}

// Quantum Teleport Effect
let quantumInterval = null
function startQuantumEffect() {
   if (quantumInterval) clearInterval(quantumInterval)

   const level = getUpgradeLevel("quantum")
   if (level > 0) {
      // Slow motion reduces teleport frequency
      const slowmoLevel = getUpgradeLevel("slowmo")
      const baseInterval = Math.max(800, 2500 - (level * 300))
      const interval = baseInterval + (slowmoLevel * 500)

      quantumInterval = setInterval(() => {
         const pos = getRandomPosition()
         setCheckboxPosition(pos)
         spawnParticles(pos.x + 10, pos.y + 10)
      }, interval)
   }
}

// Apply all upgrade effects
function applyUpgradeEffects() {
   const size = getCheckboxSize()
   checkbox.style.width = size + "px"
   checkbox.style.height = size + "px"

   startInvisibleEffect()
   startQuantumEffect()
}

// Shop Rendering
function renderShop() {
   shopList.innerHTML = ""

   // Checkbox upgrades section
   const checkboxHeader = document.createElement("div")
   checkboxHeader.className = "shop__category"
   checkboxHeader.textContent = "Checkbox Upgrades"
   shopList.appendChild(checkboxHeader)

   for (const upgrade of upgrades.checkbox) {
      shopList.appendChild(createUpgradeElement(upgrade))
   }

   // Cursor upgrades section
   const cursorHeader = document.createElement("div")
   cursorHeader.className = "shop__category"
   cursorHeader.textContent = "Cursor Upgrades"
   shopList.appendChild(cursorHeader)

   for (const upgrade of upgrades.cursor) {
      shopList.appendChild(createUpgradeElement(upgrade))
   }
}

function createUpgradeElement(upgrade) {
   const div = document.createElement("div")
   div.className = "upgrade"

   const isMaxed = upgrade.level >= upgrade.maxLevel
   const cost = getUpgradeCost(upgrade)
   const canAfford = frustration >= cost

   if (isMaxed) {
      div.classList.add("upgrade--maxed")
   } else if (!canAfford) {
      div.classList.add("upgrade--locked")
   }

   const levelDisplay = `${upgrade.level}/${upgrade.maxLevel}`
   const costDisplay = isMaxed ? "MAX" : `${cost} Fr`

   div.innerHTML = `
      <div class="upgrade__header">
         <span class="upgrade__name">${upgrade.name}</span>
         <span class="upgrade__level">${levelDisplay}</span>
      </div>
      <div class="upgrade__desc">${upgrade.desc}</div>
      <div class="upgrade__footer">
         <span class="upgrade__bonus">+${upgrade.multiplierPerLevel}x per level</span>
         <span class="upgrade__cost">${costDisplay}</span>
      </div>
   `

   if (!isMaxed && canAfford) {
      div.addEventListener("click", () => purchaseUpgrade(upgrade))
   }

   return div
}

// Purchase Upgrade
function purchaseUpgrade(upgrade) {
   const cost = getUpgradeCost(upgrade)
   if (upgrade.level >= upgrade.maxLevel || frustration < cost) return

   frustration -= cost
   upgrade.level++
   multiplier = calculateMultiplier()

   // Chat message for first purchase of this upgrade
   if (upgrade.level === 1 && chatMilestones.purchases[upgrade.id]) {
      addChatMessage(chatMilestones.purchases[upgrade.id], "purchase")
   }

   updateUI()
   saveGame()
}

// Reset Game
function resetGame() {
   if (!confirm("Reset all progress? Your lifetime attempts will be preserved.")) return

   counter = 0
   frustration = 0

   for (const category of Object.values(upgrades)) {
      for (const upgrade of category) {
         upgrade.level = 0
      }
   }

   multiplier = calculateMultiplier()

   // Clear intervals
   if (invisibleInterval) clearInterval(invisibleInterval)
   if (quantumInterval) clearInterval(quantumInterval)
   invisibleInterval = null
   quantumInterval = null

   // Reset checkbox appearance
   checkbox.style.opacity = 1

   addChatMessage("Fresh start! Your determination is... something.")

   updateUI()
   saveGame()
}

// Reset All Data
function resetAllData() {
   if (!confirm("Delete ALL saved data? This cannot be undone!")) return

   counter = 0
   lifetimeCounter = 0
   frustration = 0

   for (const category of Object.values(upgrades)) {
      for (const upgrade of category) {
         upgrade.level = 0
      }
   }

   multiplier = calculateMultiplier()

   // Clear intervals
   if (invisibleInterval) clearInterval(invisibleInterval)
   if (quantumInterval) clearInterval(quantumInterval)
   invisibleInterval = null
   quantumInterval = null

   // Reset checkbox appearance
   checkbox.style.opacity = 1

   // Clear localStorage
   localStorage.removeItem("untickable_save")

   // Clear chat and show welcome
   chatMessages.innerHTML = ""
   addChatMessage("Welcome! Try to tick the checkbox. Spoiler: you can't.")
   addChatMessage("Just like real unsubscribe buttons...")

   updateUI()
}

// Save/Load Game
function saveGame() {
   const upgradeData = {}
   for (const [category, list] of Object.entries(upgrades)) {
      upgradeData[category] = list.map(u => ({ id: u.id, level: u.level }))
   }

   const saveData = {
      counter,
      lifetimeCounter,
      frustration,
      upgrades: upgradeData
   }
   localStorage.setItem("untickable_save", JSON.stringify(saveData))
}

function loadGame() {
   const saved = localStorage.getItem("untickable_save")
   if (!saved) return

   try {
      const data = JSON.parse(saved)
      counter = data.counter || 0
      lifetimeCounter = data.lifetimeCounter || data.counter || 0
      frustration = data.frustration || 0

      if (data.upgrades) {
         for (const [category, list] of Object.entries(data.upgrades)) {
               if (upgrades[category]) {
                  for (const savedUpgrade of list) {
                     const upgrade = upgrades[category].find(u => u.id === savedUpgrade.id)
                     if (upgrade) {
                           upgrade.level = savedUpgrade.level || 0
                     }
                  }
               }
         }
      }

      multiplier = calculateMultiplier()

   } catch (e) {
      console.error("Failed to load save:", e)
   }
}

// Initialize
function init() {
   loadGame()

   // Set initial position and label
   const startPos = getRandomPosition()
   setCheckboxPosition(startPos)
   randomizeLabel()

   // Event listeners
   playRoot.addEventListener("click", handlePlayAreaClick)
   playRoot.addEventListener("mousemove", handleMouseMove)
   resetBtn.addEventListener("click", resetGame)
   resetAllBtn.addEventListener("click", resetAllData)

   // Mobile shop toggle
   shopToggle.addEventListener("click", () => {
      shopRoot.classList.add("shop--open")
      shopOverlay.classList.add("shop--open")
   })

   shopClose.addEventListener("click", () => {
      shopRoot.classList.remove("shop--open")
      shopOverlay.classList.remove("shop--open")
   })

   shopOverlay.addEventListener("click", () => {
      shopRoot.classList.remove("shop--open")
      shopOverlay.classList.remove("shop--open")
   })

   // Prevent checkbox from ever being checked
   checkbox.addEventListener("click", (e) => {
      e.preventDefault()
      checkbox.checked = false
   })
   checkbox.addEventListener("change", () => {
      checkbox.checked = false
   })

   // Welcome message
   if (lifetimeCounter === 0) {
      addChatMessage("Welcome! Try to tick the checkbox. Spoiler: you can't.")
      addChatMessage("Just like real unsubscribe buttons...")
   } else {
      addChatMessage("Welcome back! Ready for more frustration?")
   }

   // Initial UI render
   updateUI()
}

init()
