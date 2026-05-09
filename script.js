// ===== 默认菜谱数据 =====
const DEFAULT_RECIPES = [{"id":1,"name":"什锦蛋炒饭","category":"炒菜","difficulty":"中等","time":"20分钟","image":"images/什锦蛋炒饭.png","ingredients":["三色杂菜（玉米、豌豆、胡萝卜）","香肠","鸡蛋","米饭","大豆油"],"seasoning":["盐","油","生抽"],"steps":["锅中下入75g 大豆油，将250g 鸡蛋液炒成蛋片；","下入150g 三色杂菜、100g 香肠丁，炒出香味；","再下入1500g 米饭、8g 盐，翻炒均匀。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":34},{"id":2,"name":"包菜炒鸡蛋","category":"炒菜","difficulty":"中等","time":"20分钟","image":"images/包菜炒鸡蛋.jpg","ingredients":["圆包菜","鸡蛋","胡萝卜","熟猪油","大豆油","蒜子","生抽","盐","鸡精"],"seasoning":["盐","鸡精","生抽"],"steps":["下入200g大豆油、600g鸡蛋液，炒成蛋片，出锅备用；","下入150g熟猪油、60g蒜子，炒出香味；","下入1200g圆包菜、200g胡萝卜丝、13g盐、10g鸡精、50g生抽，大火翻炒2分钟；再下入鸡蛋片，炒制1分钟出品。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":22},{"id":3,"name":"爆炒牛肉","category":"炒菜","difficulty":"中等","time":"25分钟","image":"images/爆炒牛肉.png","ingredients":["牛肉","洋葱","青红椒","食用油","蒜","姜","生抽","老抽","料酒","淀粉","盐","鸡精"],"seasoning":["盐","鸡精","生抽"],"steps":["牛肉切片，用料酒、淀粉腌制10分钟；","热锅下油，将牛肉快速滑炒至变色盛出；","下蒜姜爆香，加入洋葱、青红椒翻炒；","再加入牛肉，调味后翻炒均匀。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":38},{"id":4,"name":"番茄炒蛋","category":"炒菜","difficulty":"简单","time":"15分钟","image":"images/番茄炒蛋.png","ingredients":["番茄","鸡蛋","葱","盐","糖","食用油"],"seasoning":["盐","糖"],"steps":["番茄切块，鸡蛋打散；","热锅下油，先炒鸡蛋盛出；","再炒番茄，加盐糖调味；","加入鸡蛋翻炒均匀，撒葱花。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":16},{"id":5,"name":"宫保鸡丁","category":"炒菜","difficulty":"中等","time":"25分钟","image":"images/宫保鸡丁.png","ingredients":["鸡胸肉","花生米","干辣椒","葱","姜","蒜","料酒","酱油","糖","醋","淀粉","食用油"],"seasoning":["酱油","糖","醋","盐"],"steps":["鸡胸肉切丁，用料酒、淀粉腌制；","花生米炸至金黄备用；","鸡肉滑炒变色盛出；","干辣椒、葱姜蒜爆香，加入鸡肉和花生米，调味翻炒。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":28},{"id":6,"name":"酸辣土豆丝","category":"炒菜","difficulty":"简单","time":"15分钟","image":"images/酸辣土豆丝.png","ingredients":["土豆","干辣椒","醋","盐","葱","蒜","食用油"],"seasoning":["醋","盐","干辣椒"],"steps":["土豆切丝，泡水去淀粉；","热锅下油，干辣椒、蒜爆香；","下土豆丝大火翻炒；","加醋、盐调味，炒至断生。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":12},{"id":7,"name":"青椒肉丝","category":"炒菜","difficulty":"简单","time":"20分钟","image":"images/青椒肉丝.png","ingredients":["猪肉","青椒","葱","姜","蒜","料酒","酱油","盐","淀粉","食用油"],"seasoning":["酱油","盐"],"steps":["猪肉切丝，用料酒、淀粉腌制；","青椒切丝备用；","热锅下油，先炒肉丝变色；","加入青椒丝翻炒，调味即可。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":20},{"id":8,"name":"蒜蓉西兰花","category":"炒菜","difficulty":"简单","time":"15分钟","image":"images/蒜蓉西兰花.png","ingredients":["西兰花","蒜","盐","食用油"],"seasoning":["盐","蒜蓉"],"steps":["西兰花切小朵，焯水备用；","热锅下油，蒜蓉爆香；","下西兰花翻炒；","加盐调味，快速出锅。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":15},{"id":9,"name":"红烧茄子","category":"炒菜","difficulty":"简单","time":"20分钟","image":"images/红烧茄子.png","ingredients":["茄子","葱","姜","蒜","酱油","糖","盐","食用油"],"seasoning":["酱油","糖","盐"],"steps":["茄子切块，用盐腌制10分钟；","热锅下油，煎至茄子软熟；","加入葱姜蒜、酱油、糖调味；","加水焖煮5分钟，收汁即可。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":14},{"id":10,"name":"麻婆豆腐","category":"炒菜","difficulty":"中等","time":"20分钟","image":"images/麻婆豆腐.png","ingredients":["豆腐","猪肉末","郫县豆瓣酱","花椒","葱","姜","蒜","酱油","盐","淀粉"],"seasoning":["郫县豆瓣酱","花椒","盐"],"steps":["豆腐切块，焯水备用；","猪肉末炒散，加入豆瓣酱；","加入豆腐轻轻翻炒；","加水焖煮，勾芡出锅。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":18},{"id":11,"name":"鱼香肉丝","category":"炒菜","difficulty":"中等","time":"25分钟","image":"images/鱼香肉丝.png","ingredients":["猪里脊","木耳","笋","胡萝卜","郫县豆瓣酱","葱","姜","蒜","酱油","醋","糖","淀粉"],"seasoning":["郫县豆瓣酱","酱油","醋","糖"],"steps":["肉切丝，用料酒、淀粉腌制；","木耳、笋、胡萝卜切丝焯水；","肉丝滑炒变色盛出；","调料炒香，加入配菜和肉丝翻炒。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":26},{"id":12,"name":"辣椒炒肉","category":"炒菜","difficulty":"简单","time":"20分钟","image":"images/辣椒炒肉.png","ingredients":["青椒","猪肉","蒜","盐","酱油","食用油"],"seasoning":["盐","酱油"],"steps":["青椒切块，猪肉切片；","热锅下油，蒜爆香；","下猪肉片翻炒至变色；","加入青椒，加盐酱油调味。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":18},{"id":13,"name":"蛋炒饭","category":"炒菜","difficulty":"简单","time":"15分钟","image":"images/蛋炒饭.png","ingredients":["米饭","鸡蛋","葱","盐","食用油"],"seasoning":["盐"],"steps":["鸡蛋打散备用；","热锅下油炒鸡蛋；","加入米饭翻炒；","加盐调味，撒葱花。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":12},{"id":14,"name":"蒜苔炒肉","category":"炒菜","difficulty":"简单","time":"20分钟","image":"images/蒜苔炒肉.png","ingredients":["蒜苔","猪肉","蒜","盐","酱油","食用油"],"seasoning":["盐","酱油"],"steps":["蒜苔切段，猪肉切片；","热锅下油，蒜爆香；","下肉片翻炒；","加入蒜苔，调味翻炒。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":18},{"id":15,"name":"西葫芦炒蛋","category":"炒菜","difficulty":"简单","time":"15分钟","image":"images/西葫芦炒蛋.png","ingredients":["西葫芦","鸡蛋","蒜","盐","食用油"],"seasoning":["盐"],"steps":["西葫芦切片，鸡蛋打散；","热锅下油，先炒鸡蛋盛出；","再炒西葫芦；","加入鸡蛋一起翻炒。"],"cookedCount":0,"isMastered":false,"favorite":false,"price":14}];

// ===== 数据管理 =====
class RecipeManager {
    constructor() {
        this.recipes = null; // 异步加载
        this.cookingLogs = this.loadCookingLogs();
        this.cart = this.loadCart();
        this.orders = this.loadOrders();
        this._initPromise = this._init();
    }

    async _init() {
        this.recipes = await this.loadRecipes();
    }

    async ready() {
        await this._initPromise;
        return this.recipes;
    }

    async loadRecipes() {
        // 使用预加载的ALL_RECIPES数据（优先）
        if (typeof ALL_RECIPES !== 'undefined') {
            const newRecipes = ALL_RECIPES.map((r, i) => ({
                ...r,
                id: i + 1,
                image: r.image.replace('images/images/', 'images/'),
                cookedCount: 0,
                completedCount: 0,
                superbCount: 0,
                isMastered: false,
                favorite: false,
                price: r.price || 25
            }));

            // 检查localStorage是否有旧数据，保留收藏等状态
            const stored = localStorage.getItem('recipes');
            if (stored) {
                try {
                    const oldRecipes = JSON.parse(stored);
                    // 保留用户的收藏状态和制作记录
                    const favoriteMap = new Map(oldRecipes.filter(r => r.favorite).map(r => [r.name, true]));
                    const cookedMap = new Map(oldRecipes.filter(r => r.cookedCount > 0).map(r => [r.name, r.cookedCount]));
                    const completedMap = new Map(oldRecipes.filter(r => r.completedCount > 0).map(r => [r.name, r.completedCount]));
                    const superbMap = new Map(oldRecipes.filter(r => r.superbCount > 0).map(r => [r.name, r.superbCount]));
                    const masteredMap = new Map(oldRecipes.filter(r => r.isMastered).map(r => [r.name, true]));

                    newRecipes.forEach(r => {
                        if (favoriteMap.has(r.name)) r.favorite = true;
                        if (cookedMap.has(r.name)) r.cookedCount = cookedMap.get(r.name);
                        if (completedMap.has(r.name)) r.completedCount = completedMap.get(r.name);
                        if (superbMap.has(r.name)) r.superbCount = superbMap.get(r.name);
                        if (masteredMap.has(r.name)) r.isMastered = true;
                    });
                } catch (e) {
                    console.warn('解析旧数据失败', e);
                }
            }

            // 保存到localStorage
            localStorage.setItem('recipes', JSON.stringify(newRecipes));
            return newRecipes;
        }

        // 备用：从localStorage加载
        const stored = localStorage.getItem('recipes');
        if (stored) return JSON.parse(stored);

        // 备用：尝试从JSON文件加载
        try {
            const response = await fetch('recipes.json');
            const recipes = await response.json();
            return recipes.map((r, i) => ({
                ...r,
                id: i + 1,
                image: r.image.replace('images/images/', 'images/'),
                cookedCount: 0,
                isMastered: false,
                favorite: false,
                price: r.price || 25
            }));
        } catch (e) {
            console.warn('加载失败，使用默认数据', e);
            return DEFAULT_RECIPES;
        }
    }

    loadCookingLogs() { const stored = localStorage.getItem('cookingLogs'); return stored ? JSON.parse(stored) : []; }
    loadCart() { const stored = localStorage.getItem('cart'); return stored ? JSON.parse(stored) : []; }
    loadOrders() { const stored = localStorage.getItem('orders'); return stored ? JSON.parse(stored) : []; }

    saveRecipes() { localStorage.setItem('recipes', JSON.stringify(this.recipes)); }
    saveCookingLogs() { localStorage.setItem('cookingLogs', JSON.stringify(this.cookingLogs)); }
    saveCart() { localStorage.setItem('cart', JSON.stringify(this.cart)); }
    saveOrders() { localStorage.setItem('orders', JSON.stringify(this.orders)); }

    addToCart(recipeId) {
        const existing = this.cart.find(i => i.recipeId === recipeId);
        if (existing) existing.quantity++;
        else this.cart.push({ recipeId, quantity: 1 });
        this.saveCart();
    }

    removeFromCart(recipeId) {
        this.cart = this.cart.filter(i => i.recipeId !== recipeId);
        this.saveCart();
    }

    clearCart() { this.cart = []; this.saveCart(); }

    getCartTotal() { return this.cart.reduce((t, i) => { const r = this.recipes.find(x => x.id === i.recipeId); return t + (r ? r.price * i.quantity : 0); }, 0); }
    getCartItemCount() { return this.cart.reduce((t, i) => t + i.quantity, 0); }

    addCookingLog(recipeId, notes = '', adjustments = {}) {
        const log = { recipeId, date: new Date().toISOString().split('T')[0], notes, tasteAdjustments: adjustments };
        this.cookingLogs.unshift(log);
        this.saveCookingLogs();
        const recipe = this.recipes.find(r => r.id === recipeId);
        if (recipe) {
            recipe.cookedCount++;
            recipe.lastCooked = log.date;
            this.saveRecipes();
        }
        return log;
    }

    deleteRecipe(id) { const idx = this.recipes.findIndex(r => r.id === id); if (idx >= 0) { this.recipes.splice(idx, 1); this.saveRecipes(); return true; } return false; }

    updateRecipe(id, updates) { const r = this.recipes.find(x => x.id === id); if (r) { Object.assign(r, updates); this.saveRecipes(); return r; } return null; }

    getStats() {
        const totalRecipes = this.recipes.length;
        const totalCooks = this.cookingLogs.length;
        const masteredDishes = this.recipes.filter(r => r.isMastered).length;
        return { totalRecipes, totalCooks, masteredDishes };
    }

    getRecentLogs(limit = 5) {
        return this.cookingLogs.slice(0, limit).map(log => ({ ...log, recipe: this.recipes.find(r => r.id === log.recipeId) })).filter(l => l.recipe);
    }

    searchRecipes(query = '', category = '') {
        return this.recipes.filter(recipe => {
            const matchQuery = !query || recipe.name.toLowerCase().includes(query.toLowerCase()) || recipe.ingredients.some(ing => ing.toLowerCase().includes(query.toLowerCase()));
            const matchCategory = !category || category === 'all' || category === 'favorite' || recipe.category === category;
            const matchFavorite = category === 'favorite' ? recipe.favorite : true;
            return matchQuery && matchCategory && matchFavorite;
        });
    }

    createOrder(cartItems) {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
        const items = cartItems.map(item => { const recipe = this.recipes.find(r => r.id === item.recipeId); return recipe ? { recipeId: recipe.id, name: recipe.name, quantity: item.quantity, price: recipe.price, subtotal: recipe.price * item.quantity } : null; }).filter(Boolean);
        const total = items.reduce((sum, item) => sum + item.subtotal, 0);
        const order = { id: Date.now(), createdAt: formattedDate, items, total, status: 'pending', feedback: null };
        this.orders.unshift(order);
        this.saveOrders();
        return order;
    }

    completeOrder(orderId) { const order = this.orders.find(o => o.id === orderId); if (order) { order.status = 'completed'; this.saveOrders(); return true; } return false; }

    submitFeedback(orderId, rating, comment) {
        const order = this.orders.find(o => o.id === orderId);
        if (order && order.status === 'completed') {
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
            order.feedback = { rating, comment, submittedAt: formattedDate };
            this.saveOrders();
            return true;
        }
        return false;
    }

    getFeedbackForRecipe(recipeId) {
        return this.orders.filter(o => o.status === 'completed' && o.feedback !== null && o.items.some(item => item.recipeId === recipeId)).map(o => ({ rating: o.feedback.rating, comment: o.feedback.comment, submittedAt: o.feedback.submittedAt, orderId: o.id }));
    }
}

// ===== UI 管理 =====
class UIManager {
    constructor() { window.uiManager = this; this.recipeManager = new RecipeManager(); this.currentPage = 'order'; this.currentCategory = 'all'; this.currentSearch = ''; this._pendingRating = 0; this.init(); }

    async init() {
        this.showLoadingSkeleton();
        await this.recipeManager.ready();
        this.loadState(); this.bindEvents(); this.renderMenu(); this.updateCartCount();
        this.initManageSearch();
    }

    showLoadingSkeleton() {
        const grid = document.getElementById('menu-grid');
        if (!grid) return;
        // 生成6个骨架屏项
        grid.innerHTML = Array(6).fill(0).map(() => `
            <div class="menu-item">
                <div class="menu-item-image-wrapper">
                    <div class="skeleton" style="width:100%;aspect-ratio:4/3;border-radius:0;"></div>
                </div>
                <div class="menu-item-body">
                    <div class="skeleton" style="height:16px;width:70%;margin-bottom:10px;"></div>
                    <div class="skeleton" style="height:12px;width:50%;"></div>
                </div>
            </div>
        `).join('');
    }

    loadState() {
        try {
            const state = localStorage.getItem('appState');
            if (state) {
                const parsed = JSON.parse(state);
                this.currentPage = parsed.currentPage || 'order';
                this.currentCategory = parsed.currentCategory || 'all';
                this.currentSearch = parsed.currentSearch || '';
                document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.page === this.currentPage));
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.category === this.currentCategory));
                const searchInput = document.getElementById('search-input');
                if (searchInput) searchInput.value = this.currentSearch;
            }
        } catch (e) {}
    }

    saveState() { localStorage.setItem('appState', JSON.stringify({ currentPage: this.currentPage, currentCategory: this.currentCategory, currentSearch: this.currentSearch })); }

    bindEvents() {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => this.switchPage(btn.dataset.page)));
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) cartBtn.addEventListener('click', (e) => { e.stopPropagation(); this.showCart(); });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = btn.dataset.category;
                this.renderMenu();
            });
        });

        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.addEventListener('input', () => { this.currentSearch = searchInput.value; this.renderMenu(); this.saveState(); });

        document.getElementById('recipe-form').addEventListener('submit', (e) => { e.preventDefault(); this.handleRecipeSubmit(); });
        document.getElementById('cancel-btn').addEventListener('click', () => this.switchPage('order'));

        document.getElementById('ingredients-container').addEventListener('click', (e) => { if (e.target.closest('.remove-btn')) e.target.closest('.ingredient-item').remove(); });
        document.getElementById('seasonings-container').addEventListener('click', (e) => { if (e.target.closest('.remove-btn')) e.target.closest('.ingredient-item').remove(); });
        document.getElementById('steps-container').addEventListener('click', (e) => { if (e.target.closest('.remove-btn')) { e.target.closest('.step-item').remove(); this.updateStepNumbers(); }});

        // Add dynamic items
        document.getElementById('add-ingredient').addEventListener('click', () => {
            document.getElementById('ingredients-container').insertAdjacentHTML('beforeend', '<div class="ingredient-item"><input type="text" placeholder="食材" class="ingredient-name"><input type="text" placeholder="用量" class="ingredient-amount" style="max-width:80px"><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>');
        });
        document.getElementById('add-seasoning').addEventListener('click', () => {
            document.getElementById('seasonings-container').insertAdjacentHTML('beforeend', '<div class="ingredient-item"><input type="text" placeholder="调料" class="seasoning-name"><input type="text" placeholder="用量" class="seasoning-amount" style="max-width:80px"><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>');
        });
        document.getElementById('add-step').addEventListener('click', () => {
            document.getElementById('steps-container').insertAdjacentHTML('beforeend', '<div class="step-item"><textarea placeholder="下一步..." class="step-content" rows="2" required></textarea><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>');
            this.updateStepNumbers();
        });
    }

    showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2500); }

    switchPage(pageName) {
        this.currentPage = pageName;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(`${pageName}-page`).classList.add('active');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.page === pageName));

        // Hide cart when switching pages
        this.hideCart();

        if (pageName === 'manage') { this.renderTodayMenu(); this.renderOrderHistory(); }
        if (pageName === 'add') { this.initRecipeManage(); this.resetForm(); }
    }

    renderMenu() {
        const recipes = this.recipeManager.searchRecipes(this.currentSearch, this.currentCategory);
        const grid = document.getElementById('menu-grid');
        if (!grid) return;
        if (recipes.length === 0) { grid.innerHTML = '<div class="empty-state"><i class="fas fa-utensils"></i><p>还没有菜品呢~</p></div>'; return; }
        grid.innerHTML = recipes.map(recipe => {
            const doneCount = recipe.completedCount || recipe.cookedCount || 0;
            const isMastered = recipe.isMastered;
            const countDisplay = isMastered
                ? `<span class="done-count mastered">${doneCount}次 ❤️</span>`
                : `<span class="done-count">${doneCount}次</span>`;
            return `
            <div class="menu-item">
                <div class="menu-item-image-wrapper" onclick="window.uiManager.showDetail(${recipe.id})">
                    ${recipe.favorite ? '<i class="fas fa-heart menu-item-fav"></i>' : ''}
                    ${recipe.isMastered ? '<span class="menu-item-badge">拿手菜</span>' : ''}
                    <img src="${recipe.image}" class="menu-item-image" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 225%22><rect fill=%22%23FEF6EE%22 width=%22300%22 height=%22225%22/><text x=%22150%22 y=%22120%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2214%22>暂时没有图片</text></svg>'">
                </div>
                <div class="menu-item-body">
                    <div class="menu-item-actions">
                        <button class="menu-fav-btn" onclick="event.stopPropagation();window.uiManager.toggleFavorite(${recipe.id})" title="${recipe.favorite ? '取消收藏' : '收藏'}">
                            <i class="fas fa-heart" style="color:${recipe.favorite ? '#e07a5f' : '#ccc'};"></i>
                        </button>
                        <button class="menu-cart-btn" onclick="event.stopPropagation();window.uiManager.addToCartFromMenu(${recipe.id})" title="加入购物车">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                    <div class="menu-item-name" onclick="window.uiManager.showDetail(${recipe.id})" style="cursor:pointer;">${recipe.name}</div>
                    <div class="menu-item-meta" onclick="window.uiManager.showDetail(${recipe.id})" style="cursor:pointer;">
                        <span>${recipe.category}</span>
                        ${countDisplay}
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    showDetail(recipeId) {
        const recipe = this.recipeManager.recipes.find(r => r.id === recipeId);
        if (!recipe) return;
        const detailHtml = `
            <img src="${recipe.image}" class="recipe-detail-image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 375%22><rect fill=%22%23FEF6EE%22 width=%22600%22 height=%22375%22/><text x=%22300%22 y=%22190%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2220%22>暂时没有图片</text></svg>'">
            <div class="recipe-detail-body">
                <h2>${recipe.name}</h2>
                <div class="recipe-detail-tags">
                    <span class="recipe-tag">${recipe.category}</span>
                    <span class="recipe-tag">${recipe.difficulty}</span>
                    <span class="recipe-tag">⏱ ${recipe.time}</span>
                    <span class="recipe-tag">💰 ¥${recipe.price}</span>
                </div>
                <div class="recipe-section"><h3>🥬 食材</h3><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul></div>
                ${recipe.seasoning.length ? `<div class="recipe-section"><h3>🧂 调料</h3><ul>${recipe.seasoning.map(s => `<li>${s}</li>`).join('')}</ul></div>` : ''}
                <div class="recipe-section"><h3>👨‍🍳 步骤</h3><ol>${recipe.steps.map((s, i) => `<li>${s}</li>`).join('')}</ol></div>
                ${this.renderRecipeFeedbackSection(recipe.id)}
                <div class="recipe-actions">
                    <button class="action-btn" onclick="window.uiManager.toggleFavorite(${recipe.id})"><i class="fas fa-heart${recipe.favorite ? '' : '-o'}"></i>${recipe.favorite ? '已收藏' : '收藏'}</button>
                    <button class="action-btn primary" onclick="window.uiManager.addToCartFromDetail(${recipe.id})"><i class="fas fa-cart-plus"></i>加入购物车</button>
                </div>
            </div>
        `;
        const layer = document.createElement('div');
        layer.className = 'detail-layer active';
        layer.innerHTML = `<div class="detail-backdrop" onclick="window.uiManager.closeDetail()"></div><div class="detail-content"><button class="close-detail" onclick="window.uiManager.closeDetail()"><i class="fas fa-times"></i></button>${detailHtml}</div>`;
        document.body.appendChild(layer);
    }

    closeDetail() { document.querySelector('.detail-layer')?.remove(); }
    toggleFavorite(recipeId) { const recipe = this.recipeManager.recipes.find(r => r.id === recipeId); if (recipe) { recipe.favorite = !recipe.favorite; this.recipeManager.saveRecipes(); this.showToast(recipe.favorite ? '已收藏' : '已取消收藏'); this.renderMenu(); } }
    deleteRecipeFromDetail(id) { if (confirm('确定删除？')) { this.recipeManager.deleteRecipe(id); this.closeDetail(); this.showToast('已删除'); } }
    addToCartFromMenu(id) { this.recipeManager.addToCart(id); this.updateCartCount(); this.showToast('已添加到购物车'); this.renderMenu(); }
    addToCartFromDetail(id) { this.recipeManager.addToCart(id); this.updateCartCount(); this.showToast('已添加'); }
    updateCartCount() { document.getElementById('cart-count').textContent = this.recipeManager.getCartItemCount(); }
    updateStats() { const s = this.recipeManager.getStats(); document.getElementById('total-recipes').textContent = s.totalRecipes; document.getElementById('total-cooks').textContent = s.totalCooks; document.getElementById('mastered-count').textContent = s.masteredDishes; }
    renderRecent() { const logs = this.recipeManager.getRecentLogs(5); const list = document.getElementById('recent-list'); if (!list) return; list.innerHTML = logs.length === 0 ? '<div class="empty-state"><i class="fas fa-clock"></i><p>还没有制作记录~</p></div>' : logs.map(log => `<div class="cook-log-item"><img src="${log.recipe.image}" class="cook-log-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 44 44%22><rect fill=%22%23FEF6EE%22 width=%2244%22 height=%2244%22/><text x=%2222%22 y=%2225%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2210%22>🍳</text></svg>'"><div class="cook-log-info"><div class="cook-log-name">${log.recipe.name}</div><div class="cook-log-date">${log.date}${log.notes ? ' - '+log.notes : ''}</div></div></div>`).join(''); }

    renderRecipeList() {
        const list = document.getElementById('recipe-management-list');
        if (!list) return;
        const recipes = this.recipeManager.recipes;
        list.innerHTML = recipes.length === 0 ? '<div class="empty-state"><i class="fas fa-book"></i><p>还没有菜谱呢~</p></div>' : recipes.map(r => `<div class="recipe-list-item"><img src="${r.image}" class="recipe-list-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 56 56%22><rect fill=%22%23FEF6EE%22 width=%2256%22 height=%2256%22/><text x=%2228%22 y=%2232%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2214%22>🍽️</text></svg>'"><div class="recipe-list-info"><div class="recipe-list-name">${r.name}</div><div class="recipe-list-meta">${r.category} · ${r.difficulty} · 做了${r.cookedCount}次</div></div><div class="recipe-list-actions"><button class="recipe-action-btn fav-${r.favorite?'active':''}" onclick="window.uiManager.toggleFavorite(${r.id})"><i class="fas fa-heart${r.favorite?'':'-o'}"></i></button><button class="recipe-action-btn" onclick="window.uiManager.quickCook(${r.id})"><i class="fas fa-plus"></i></button></div></div>`).join('');
    }

    renderOrderHistory() {
        const container = document.getElementById('order-history-section');
        if (!container) return;
        const list = document.getElementById('order-history-list');
        const orders = this.recipeManager.orders;

        if (orders.length === 0) {
            list.innerHTML = '<div class="empty-state"><i class="fas fa-receipt"></i><p>还没有点单记录</p></div>';
            return;
        }

        // Group orders by date
        const ordersByDate = {};
        orders.forEach(order => {
            const date = order.createdAt.split(' ')[0];
            if (!ordersByDate[date]) ordersByDate[date] = [];
            ordersByDate[date].push(order);
        });

        // Render grouped by date
        let html = '';
        Object.keys(ordersByDate).sort((a, b) => b.localeCompare(a)).forEach(date => {
            const dayOrders = ordersByDate[date];
            const dayTotal = dayOrders.reduce((sum, o) => sum + o.total, 0);
            const orderCount = dayOrders.length;

            html += `<div class="order-day-group">
                <div class="order-day-header" onclick="window.uiManager.toggleOrderDay('${date}')">
                    <div class="order-day-info">
                        <span class="order-day-date">${date}</span>
                        <span class="order-day-count">${orderCount}单</span>
                    </div>
                    <div class="order-day-summary">
                        <span class="order-day-total">¥${dayTotal}</span>
                        <i class="fas fa-chevron-down order-day-arrow" id="arrow-${date}"></i>
                    </div>
                </div>
                <div class="order-day-content" id="content-${date}" style="display:none">
                    ${dayOrders.map(order => {
                        const statusHtml = order.status === 'pending' ? '<span class="order-status pending">待完成</span>' : '<span class="order-status completed">已完成</span>';
                        const itemsHtml = order.items.map(item => `<div class="order-item-row"><span>${item.name} x${item.quantity}</span><span class="order-item-subtotal">¥${item.subtotal}</span></div>`).join('');
                        let actionHtml = '';
                        if (order.status === 'pending') actionHtml = `<button class="order-complete-btn" onclick="window.uiManager.markOrderCompleted(${order.id})">标记完成</button>`;
                        else if (order.feedback === null) actionHtml = `<button class="order-feedback-btn" onclick="window.uiManager.showFeedbackModal(${order.id})">评价</button>`;
                        else actionHtml = `<div class="order-feedback-display"><span class="feedback-stars">${'★'.repeat(order.feedback.rating)}</span>${order.feedback.comment ? '<span class="feedback-comment">'+order.feedback.comment+'</span>' : ''}</div>`;
                        return `<div class="order-history-card"><div class="order-history-header"><span class="order-date">${order.createdAt.split(' ')[1]}</span>${statusHtml}</div><div class="order-items-list">${itemsHtml}</div><div class="order-history-total">合计：<span class="order-total-price">¥${order.total}</span></div><div class="order-history-actions">${actionHtml}<button class="order-delete-btn" onclick="window.uiManager.deleteOrder(${order.id})"><i class="fas fa-trash"></i>删除</button></div></div>`;
                    }).join('')}
                </div>
            </div>`;
        });

        list.innerHTML = html;
    }

    toggleOrderDay(date) {
        const content = document.getElementById('content-' + date);
        const arrow = document.getElementById('arrow-' + date);
        if (content.style.display === 'none') {
            content.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            content.style.display = 'none';
            arrow.style.transform = 'rotate(0)';
        }
    }

    markOrderCompleted(id) { if (this.recipeManager.completeOrder(id)) { this.renderOrderHistory(); this.showToast('已标记完成'); } }

    deleteOrder(orderId) {
        if (!confirm('确定要删除这条订单吗？')) return;
        this.recipeManager.orders = this.recipeManager.orders.filter(o => o.id !== orderId);
        this.recipeManager.saveOrders();
        this.renderOrderHistory();
        this.renderTodayMenu();
        this.showToast('已删除');
    }

    quickCook(recipeId) {
        const modal = `<div class="taste-modal"><div class="taste-modal-content"><h3>记录制作</h3><div class="form-group"><label>备注（可选）</label><textarea id="cooking-notes" rows="2"></textarea></div><div class="taste-modal-actions"><button class="cancel-btn" onclick="document.querySelector('.taste-modal')?.remove()">取消</button><button class="submit-btn" onclick="window.uiManager.submitCookingRecord(${recipeId})">确认</button></div></div></div>`;
        document.body.insertAdjacentHTML('beforeend', modal);
    }

    submitCookingRecord(recipeId) { const notes = document.getElementById('cooking-notes')?.value || ''; this.recipeManager.addCookingLog(recipeId, notes, {}); document.querySelector('.taste-modal')?.remove(); this.showToast('已记录制作'); }

    showCart() {
        // 先移除旧的动态购物车（如果存在）
        this.hideCart();

        if (!this.recipeManager.recipes || this.recipeManager.recipes.length === 0) {
            this.showToast('数据加载中...');
            return;
        }

        // 动态创建购物车
        const overlay = document.createElement('div');
        overlay.id = 'cart-overlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,0.4);display:flex;flex-direction:column;justify-content:flex-end;animation:fadeIn 0.2s ease-out;';

        // 关闭按钮（点击遮罩关闭）
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.hideCart();
        });

        // 购物车内容容器
        const content = document.createElement('div');
        content.style.cssText = 'background:#fff;border-radius:16px 16px 0 0;max-height:80vh;overflow-y:auto;';

        // 头部
        const header = document.createElement('div');
        header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #f0e6d8;';
        header.innerHTML = '<h2 style="font-size:18px;font-weight:600;margin:0;">🛒 购物车</h2><button id="cart-close-btn" style="background:#f5f0eb;border:none;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>';

        // 商品列表
        const list = document.createElement('div');
        list.style.cssText = 'padding:12px 16px;background:#fdfaf6;max-height:50vh;overflow-y:auto;';

        // 底部
        const footer = document.createElement('div');
        footer.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-top:1px solid #f0e6d8;background:#fff;';

        if (this.recipeManager.cart.length === 0) {
            list.innerHTML = '<div style="text-align:center;padding:40px;color:#b8a99a;"><div style="font-size:40px;margin-bottom:12px;">🛒</div><p>购物车是空的~</p></div>';
            footer.innerHTML = '<span style="font-size:16px;font-weight:600;">0道菜</span><button style="background:#e07a5f;color:#fff;border:none;padding:10px 24px;border-radius:24px;font-size:16px;cursor:pointer;opacity:0.5;" disabled>确认下单</button>';
        } else {
            const totalItems = this.recipeManager.cart.reduce((sum, item) => sum + item.quantity, 0);

            list.innerHTML = this.recipeManager.cart.map(item => {
                const recipe = this.recipeManager.recipes.find(r => r.id === item.recipeId);
                if (!recipe) return '';
                return `<div style="display:flex;align-items:center;gap:12px;background:#fff;padding:12px;margin-bottom:8px;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <img src="${recipe.image}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 50 50%22><rect fill=%22%23FEF6EE%22 width=%2250%22 height=%2250%22/><text x=%2225%22 y=%2230%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2210%22>🍽️</text></svg>'">
                    <div style="flex:1;">
                        <div style="font-weight:500;">${recipe.name}</div>
                        <div style="color:#b8a99a;font-size:14px;">×${item.quantity}</div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <button onclick="window.uiManager.updateQty(${item.recipeId}, ${item.quantity-1})" style="width:28px;height:28px;border-radius:50%;border:1px solid #d4c5b0;background:#fff;cursor:pointer;font-size:16px;">-</button>
                        <span style="font-weight:500;">${item.quantity}</span>
                        <button onclick="window.uiManager.updateQty(${item.recipeId}, ${item.quantity+1})" style="width:28px;height:28px;border-radius:50%;border:1px solid #d4c5b0;background:#fff;cursor:pointer;font-size:16px;">+</button>
                    </div>
                </div>`;
            }).filter(Boolean).join('');

            footer.innerHTML = `<span style="font-size:16px;font-weight:600;">${totalItems}道菜</span><button id="cart-checkout-btn" style="background:#e07a5f;color:#fff;border:none;padding:10px 24px;border-radius:24px;font-size:16px;cursor:pointer;font-weight:500;">确认下单</button>`;
        }

        content.appendChild(header);
        content.appendChild(list);
        content.appendChild(footer);
        overlay.appendChild(content);

        // 头部关闭按钮
        header.querySelector('#cart-close-btn').addEventListener('click', () => this.hideCart());

        // 结账按钮
        const checkoutBtn = footer.querySelector('#cart-checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }

        document.body.appendChild(overlay);
    }

    hideCart() {
        const overlay = document.getElementById('cart-overlay');
        if (overlay) overlay.remove();
    }
    updateQty(recipeId, qty) { if (qty <= 0) this.recipeManager.removeFromCart(recipeId); else { const item = this.recipeManager.cart.find(i => i.recipeId === recipeId); if (item) item.quantity = qty; this.recipeManager.saveCart(); } this.updateCartCount(); this.showCart(); }
    checkout() { if (this.recipeManager.cart.length === 0) { this.showToast('购物车为空'); return; } this.hideCart(); this.showOrderConfirmation(); }

    showOrderConfirmation() {
        const totalItems = this.recipeManager.cart.reduce((sum, item) => sum + item.quantity, 0);
        const items = this.recipeManager.cart.map(item => { const recipe = this.recipeManager.recipes.find(r => r.id === item.recipeId); if (!recipe) return ''; return `<div class="confirm-item"><img src="${recipe.image}" class="confirm-item-image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 44 44%22><rect fill=%22%23FEF6EE%22 width=%2244%22 height=%2244%22/><text x=%2222%22 y=%2225%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2210%22>🍽️</text></svg>'"><div class="confirm-item-name">${recipe.name}</div><div class="confirm-item-qty">×${item.quantity}</div></div>`; }).filter(Boolean).join('');

        // Remove existing layer if any
        document.getElementById('order-confirm-layer')?.remove();

        const layer = document.createElement('div');
        layer.id = 'order-confirm-layer';
        layer.className = 'confirm-layer active';
        layer.innerHTML = `
            <div class="confirm-backdrop" onclick="window.uiManager.hideOrderConfirmation()"></div>
            <div class="confirm-content">
                <button class="close-confirm" onclick="window.uiManager.hideOrderConfirmation()"><i class="fas fa-times"></i></button>
                <div class="confirm-header">
                    <div class="emoji">❤️</div>
                    <h2>点菜成功！</h2>
                </div>
                <div class="confirm-items">${items}</div>
                <div class="confirm-message">宝贝，我都会用心做好！</div>
                <div class="confirm-footer">
                    <span>共${totalItems}道菜</span>
                </div>
                <button class="confirm-submit-btn" id="confirm-submit-btn">确认下单</button>
            </div>
        `;
        document.body.appendChild(layer);

        // Add event listener after DOM is ready
        document.getElementById('confirm-submit-btn').addEventListener('click', () => this.confirmOrder());
    }

    hideOrderConfirmation() { document.getElementById('order-confirm-layer')?.remove(); }
    confirmOrder() {
        this.recipeManager.createOrder(this.recipeManager.cart);
        this.recipeManager.clearCart();
        this.hideCart();
        this.hideOrderConfirmation();
        this.recipeManager.saveCart();
        this.updateCartCount();
        this.showToast('下单成功！❤️');

        // 切换到菜谱页面并显示今日菜单
        this.switchPage('manage');
        this.renderTodayMenu();
    }

    // 渲染今日菜单
    renderTodayMenu() {
        const container = document.getElementById('today-menu-list');
        if (!container) return;

        const today = new Date();
        const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

        const todayOrders = this.recipeManager.orders.filter(o => o.createdAt.startsWith(todayStr));

        if (todayOrders.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-calendar-day"></i><p>今天还没有点菜哦~</p></div>';
            return;
        }

        // 收集今天所有菜品
        const allItems = [];
        todayOrders.forEach(order => {
            order.items.forEach(item => {
                const existing = allItems.find(i => i.recipeId === item.recipeId);
                if (existing) {
                    existing.quantity += item.quantity;
                    existing.subtotal += item.subtotal;
                } else {
                    allItems.push({ ...item });
                }
            });
        });

        container.innerHTML = allItems.map(item => {
            const recipe = this.recipeManager.recipes.find(r => r.id === item.recipeId);
            const img = recipe ? recipe.image : 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 60%22><rect fill=%22%23FEF6EE%22 width=%2260%22 height=%2260%22/><text x=%2230%22 y=%2235%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2214%22>🍽️</text></svg>';
            return `<div class="today-menu-item">
                <img src="${img}" class="today-menu-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 60%22><rect fill=%22%23FEF6EE%22 width=%2260%22 height=%2260%22/><text x=%2230%22 y=%2235%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2214%22>🍽️</text></svg>'">
                <div class="today-menu-info">
                    <div class="today-menu-name">${item.name}</div>
                    <div class="today-menu-qty">×${item.quantity}</div>
                </div>
                <div class="today-menu-price">¥${item.subtotal}</div>
            </div>`;
        }).join('');

        const total = allItems.reduce((sum, item) => sum + item.subtotal, 0);
        container.innerHTML += `<div class="today-menu-total">今日总计: <span>¥${total}</span></div>`;
    }

    // 菜谱页面搜索
    initManageSearch() {
        const searchInput = document.getElementById('manage-search-input');
        const resultsContainer = document.getElementById('manage-search-results');
        if (!searchInput || !resultsContainer) return;

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            if (!query) {
                resultsContainer.innerHTML = '';
                return;
            }

            const recipes = this.recipeManager.recipes.filter(r =>
                r.name.toLowerCase().includes(query.toLowerCase()) ||
                r.category.toLowerCase().includes(query.toLowerCase())
            );

            if (recipes.length === 0) {
                resultsContainer.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>没有找到相关菜谱</p></div>';
                return;
            }

            resultsContainer.innerHTML = recipes.slice(0, 20).map(r => `
                <div class="recipe-list-item" onclick="window.uiManager.showDetail(${r.id})">
                    <img src="${r.image}" class="recipe-list-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 56 56%22><rect fill=%22%23FEF6EE%22 width=%2256%22 height=%2256%22/><text x=%2228%22 y=%2232%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2214%22>🍽️</text></svg>'">
                    <div class="recipe-list-info">
                        <div class="recipe-list-name">${r.name}</div>
                        <div class="recipe-list-meta">${r.category} · ${r.difficulty} · 做了${r.cookedCount}次</div>
                    </div>
                </div>
            `).join('');
        });
    }

    showFeedbackModal(orderId) {
        const order = this.recipeManager.orders.find(o => o.id === orderId);
        if (!order) return;

        // 移除已存在的弹窗
        document.getElementById('feedback-layer')?.remove();

        // 为每个菜品生成评分行
        const itemsHtml = order.items.map((item, idx) => {
            const recipe = this.recipeManager.recipes.find(r => r.id === item.recipeId);
            const img = recipe ? recipe.image : '';
            return `<div class="feedback-dish-row" data-recipe-id="${item.recipeId}" data-item-idx="${idx}">
                <img src="${img}" class="feedback-dish-img" onerror="this.style.display='none'">
                <div class="feedback-dish-info">
                    <div class="feedback-dish-name">${item.name}</div>
                    <div class="feedback-dish-qty">x${item.quantity}</div>
                </div>
                <div class="feedback-dish-stars" data-idx="${idx}">
                    ${[1,2,3,4,5].map(i => `<span class="star" data-value="${i}" onclick="window.uiManager.setDishRating(${orderId}, ${idx}, ${item.recipeId}, ${i})">☆</span>`).join('')}
                </div>
            </div>`;
        }).join('');

        const layer = document.createElement('div');
        layer.id = 'feedback-layer';
        layer.className = 'confirm-layer active';
        layer.innerHTML = `
            <div class="confirm-backdrop" onclick="window.uiManager.hideFeedbackModal()"></div>
            <div class="confirm-content feedback-content">
                <button class="close-confirm" onclick="window.uiManager.hideFeedbackModal()"><i class="fas fa-times"></i></button>
                <div class="feedback-header">
                    <h2>这道菜怎么样？</h2>
                </div>
                <div class="feedback-dish-list">${itemsHtml}</div>
                <div class="feedback-tip">点击星星评分，3星及以上算完成，5星超棒！</div>
                <button class="confirm-submit-btn" id="feedback-submit-btn" onclick="window.uiManager.submitFeedback(${orderId})">完成评价</button>
            </div>
        `;
        document.body.appendChild(layer);
    }

    setDishRating(orderId, itemIdx, recipeId, rating) {
        // 存储每个菜品的评分
        if (!this._dishRatings) this._dishRatings = {};
        this._dishRatings[recipeId] = rating;

        // 更新UI
        const starsContainer = document.querySelectorAll(`.feedback-dish-stars[data-idx="${itemIdx}"] .star`);
        starsContainer.forEach((star, i) => {
            star.textContent = i < rating ? '★' : '☆';
            star.classList.toggle('active', i < rating);
        });
    }

    hideFeedbackModal() {
        document.getElementById('feedback-layer')?.remove();
        this._dishRatings = {};
    }

    submitFeedback(orderId) {
        const order = this.recipeManager.orders.find(o => o.id === orderId);
        if (!order) return;

        if (!this._dishRatings || Object.keys(this._dishRatings).length === 0) {
            this.showToast('请至少给一道菜评分 ❤️');
            return;
        }

        // 为每个菜品提交评价
        const completedDishes = [];
        Object.entries(this._dishRatings).forEach(([recipeId, rating]) => {
            const recipe = this.recipeManager.recipes.find(r => r.id === parseInt(recipeId));
            if (!recipe) return;

            // 记录完成次数
            if (rating >= 3) {
                recipe.completedCount = (recipe.completedCount || 0) + 1;
            }

            // 如果5星，额外记录超级好评
            if (rating === 5) {
                recipe.superbCount = (recipe.superbCount || 0) + 1;
            }

            // 3次5星自动标记为拿手菜
            if (recipe.superbCount >= 3) {
                recipe.isMastered = true;
                completedDishes.push(recipe.name);
            }
        });

        this.recipeManager.saveRecipes();

        // 更新订单评价
        const comment = Object.entries(this._dishRatings).map(([rid, r]) => {
            const recipe = this.recipeManager.recipes.find(r => r.id === parseInt(rid));
            return recipe ? `${recipe.name}: ${r}星` : '';
        }).join(', ');

        order.feedback = {
            rating: Math.max(...Object.values(this._dishRatings)),
            comment: comment,
            submittedAt: new Date().toLocaleString('zh-CN')
        };
        order.status = 'completed';
        this.recipeManager.saveOrders();

        this.hideFeedbackModal();
        this.renderOrderHistory();

        // 显示提示
        if (completedDishes.length > 0) {
            this.showToast(`恭喜！${completedDishes.join('、')}已成为拿手菜！🎉`);
        } else {
            this.showToast('评价完成！谢谢宝贝 ❤️');
        }
    }

    renderRecipeFeedbackSection(recipeId) {
        const feedbacks = this.recipeManager.getFeedbackForRecipe(recipeId);
        if (feedbacks.length === 0) return '';
        return `<div class="recipe-section feedback-section"><h3>宝贝的评价</h3>${feedbacks.map(fb => `<div class="feedback-card"><div class="feedback-card-stars">${'★'.repeat(fb.rating)}${'☆'.repeat(5-fb.rating)}</div>${fb.comment ? `<div class="feedback-card-comment">"${fb.comment}"</div>` : ''}<div class="feedback-card-date">${fb.submittedAt}</div></div>`).join('')}</div>`;
    }

    handleRecipeSubmit() {
        // 收集食材
        const ingredients = [];
        document.querySelectorAll('#ingredients-container .ingredient-item').forEach(item => {
            const name = item.querySelector('.ingredient-name')?.value?.trim();
            const amount = item.querySelector('.ingredient-amount')?.value?.trim();
            if (name) ingredients.push(amount ? `${name} ${amount}` : name);
        });

        // 收集调料
        const seasonings = [];
        document.querySelectorAll('#seasonings-container .ingredient-item').forEach(item => {
            const name = item.querySelector('.seasoning-name')?.value?.trim() || item.querySelector('.ingredient-name')?.value?.trim();
            const amount = item.querySelector('.seasoning-amount')?.value?.trim() || item.querySelector('.ingredient-amount')?.value?.trim();
            if (name) seasonings.push(amount ? `${name} ${amount}` : name);
        });

        // 收集步骤
        const steps = [];
        document.querySelectorAll('#steps-container .step-item').forEach(item => {
            const content = item.querySelector('.step-content')?.value?.trim();
            if (content) steps.push(content);
        });

        // 验证
        if (!document.getElementById('recipe-name').value.trim()) { this.showToast('请填写菜名'); return; }
        if (ingredients.length === 0) { this.showToast('请填写食材'); return; }
        if (steps.length === 0) { this.showToast('请填写步骤'); return; }

        const recipeId = document.getElementById('recipe-id').value;
        const recipeData = {
            name: document.getElementById('recipe-name').value.trim(),
            category: document.getElementById('recipe-category').value,
            difficulty: document.getElementById('recipe-difficulty').value,
            time: document.getElementById('recipe-time').value.trim(),
            image: document.getElementById('recipe-image').value.trim() || 'images/placeholder.png',
            ingredients,
            seasoning: seasonings,
            steps
        };

        if (recipeId) {
            // 编辑现有菜谱：保留统计字段
            const index = this.recipeManager.recipes.findIndex(r => r.id === parseInt(recipeId));
            if (index !== -1) {
                const existing = this.recipeManager.recipes[index];
                this.recipeManager.recipes[index] = {
                    ...existing,
                    ...recipeData,
                    // 保留不变的状态字段
                    id: existing.id,
                    cookedCount: existing.cookedCount || 0,
                    completedCount: existing.completedCount || 0,
                    superbCount: existing.superbCount || 0,
                    isMastered: existing.isMastered || false,
                    favorite: existing.favorite || false
                };
                this.recipeManager.saveRecipes();
                this.showToast('修改成功！');
                this.renderRecipeManageList();
            }
        } else {
            // 新增菜谱
            const newRecipe = {
                ...recipeData,
                id: Date.now(),
                cookedCount: 0,
                completedCount: 0,
                superbCount: 0,
                isMastered: false,
                favorite: false
            };
            this.recipeManager.recipes.push(newRecipe);
            this.recipeManager.saveRecipes();
            this.showToast('添加成功！');
        }

        this.resetForm();
        this.renderRecipeManageList();
        // 滚动到列表顶部查看结果
        document.getElementById('recipe-manage-list')?.scrollIntoView({ behavior: 'smooth' });
    }

    // 渲染菜谱管理列表
    renderRecipeManageList() {
        const container = document.getElementById('recipe-manage-list');
        const searchInput = document.getElementById('recipe-manage-search');
        if (!container) return;

        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

        // 没有搜索词时显示提示
        if (!query) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>输入关键词搜索菜谱</p></div>';
            return;
        }

        let recipes = this.recipeManager.recipes.filter(r =>
            r.name.toLowerCase().includes(query) ||
            r.category.toLowerCase().includes(query) ||
            (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(query)))
        );

        if (recipes.length === 0) {
            container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>没有找到匹配的菜谱</p></div>';
            return;
        }

        container.innerHTML = recipes.map(r => {
            const isMastered = r.isMastered ? '<span class="mastered-badge">拿手菜</span>' : '';
            return `<div class="recipe-manage-item">
                <img src="${r.image}" class="recipe-manage-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 60 60%22><rect fill=%22%23FEF6EE%22 width=%2260%22 height=%2260%22/><text x=%2230%22 y=%2235%22 text-anchor=%22middle%22 fill=%22%23B8A99A%22 font-size=%2214%22>🍽️</text></svg>'">
                <div class="recipe-manage-info">
                    <div class="recipe-manage-name">${r.name} ${isMastered}</div>
                    <div class="recipe-manage-meta">${r.category} · ${r.difficulty}</div>
                </div>
                <div class="recipe-manage-actions">
                    <button class="manage-action-btn edit" onclick="window.uiManager.editRecipe(${r.id})"><i class="fas fa-edit"></i>编辑</button>
                    <button class="manage-action-btn delete" onclick="window.uiManager.deleteRecipeFromManage(${r.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
        }).join('');
    }

    // 编辑菜谱
    editRecipe(recipeId) {
        const recipe = this.recipeManager.recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        // 切换到添加页面显示表单
        this.switchPage('add');

        document.getElementById('recipe-id').value = recipe.id;
        document.getElementById('recipe-name').value = recipe.name;
        document.getElementById('recipe-category').value = recipe.category;
        document.getElementById('recipe-difficulty').value = recipe.difficulty;
        document.getElementById('recipe-time').value = recipe.time;
        document.getElementById('recipe-image').value = recipe.image || '';

        // 填充食材
        const ingredientsContainer = document.getElementById('ingredients-container');
        ingredientsContainer.innerHTML = '';
        (recipe.ingredients || []).forEach(ing => {
            const parts = ing.split(' ');
            const name = parts[0] || ing;
            const amount = parts.slice(1).join(' ') || '';
            const div = document.createElement('div');
            div.className = 'ingredient-item';
            div.innerHTML = `<input type="text" placeholder="食材" class="ingredient-name" value="${this.escapeHtml(name)}">
                <input type="text" placeholder="用量" class="ingredient-amount" style="max-width:80px" value="${this.escapeHtml(amount)}">
                <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>`;
            div.querySelector('.remove-btn').addEventListener('click', () => div.remove());
            ingredientsContainer.appendChild(div);
        });
        if (ingredientsContainer.children.length === 0) {
            ingredientsContainer.innerHTML = `<div class="ingredient-item"><input type="text" placeholder="食材" class="ingredient-name"><input type="text" placeholder="用量" class="ingredient-amount" style="max-width:80px"><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>`;
        }

        // 填充调料
        const seasoningsContainer = document.getElementById('seasonings-container');
        seasoningsContainer.innerHTML = '';
        (recipe.seasoning || []).forEach(ing => {
            const parts = ing.split(' ');
            const name = parts[0] || ing;
            const amount = parts.slice(1).join(' ') || '';
            const div = document.createElement('div');
            div.className = 'ingredient-item';
            div.innerHTML = `<input type="text" placeholder="调料" class="seasoning-name" value="${this.escapeHtml(name)}">
                <input type="text" placeholder="用量" class="seasoning-amount" style="max-width:80px" value="${this.escapeHtml(amount)}">
                <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>`;
            div.querySelector('.remove-btn').addEventListener('click', () => div.remove());
            seasoningsContainer.appendChild(div);
        });
        if (seasoningsContainer.children.length === 0) {
            seasoningsContainer.innerHTML = `<div class="ingredient-item"><input type="text" placeholder="调料" class="seasoning-name"><input type="text" placeholder="用量" class="seasoning-amount" style="max-width:80px"><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>`;
        }

        // 填充步骤
        const stepsContainer = document.getElementById('steps-container');
        stepsContainer.innerHTML = '';
        (recipe.steps || []).forEach((step, i) => {
            const div = document.createElement('div');
            div.className = 'step-item';
            div.innerHTML = `<textarea placeholder="第${i+1}步..." class="step-content" rows="2">${this.escapeHtml(step)}</textarea>
                <button type="button" class="remove-btn"><i class="fas fa-times"></i></button>`;
            div.querySelector('.remove-btn').addEventListener('click', () => { div.remove(); this.updateStepNumbers(); });
            stepsContainer.appendChild(div);
        });
        if (stepsContainer.children.length === 0) {
            stepsContainer.innerHTML = `<div class="step-item"><textarea placeholder="第一步..." class="step-content" rows="2" required></textarea><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>`;
        }

        // 更新标题
        document.getElementById('form-title').textContent = '编辑菜谱 - ' + recipe.name;
        document.getElementById('form-title').scrollIntoView({ behavior: 'smooth' });

        this.showToast('正在编辑: ' + recipe.name);
    }

    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // 从管理页面删除菜谱
    deleteRecipeFromManage(recipeId) {
        if (!confirm('确定要删除这道菜谱吗？')) return;
        const recipe = this.recipeManager.recipes.find(r => r.id === recipeId);
        this.recipeManager.recipes = this.recipeManager.recipes.filter(r => r.id !== recipeId);
        this.recipeManager.saveRecipes();
        this.renderRecipeManageList();
        this.showToast('已删除: ' + (recipe ? recipe.name : ''));
    }

    resetForm() {
        document.getElementById('recipe-form').reset();
        document.getElementById('recipe-id').value = '';
        document.getElementById('form-title').textContent = '添加新菜谱';
        document.getElementById('ingredients-container').innerHTML = `<div class="ingredient-item"><input type="text" placeholder="食材" class="ingredient-name"><input type="text" placeholder="用量" class="ingredient-amount" style="max-width:80px"><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>`;
        document.getElementById('seasonings-container').innerHTML = `<div class="ingredient-item"><input type="text" placeholder="调料" class="seasoning-name"><input type="text" placeholder="用量" class="seasoning-amount" style="max-width:80px"><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>`;
        document.getElementById('steps-container').innerHTML = `<div class="step-item"><textarea placeholder="第一步..." class="step-content" rows="2" required></textarea><button type="button" class="remove-btn"><i class="fas fa-times"></i></button></div>`;
    }

    updateStepNumbers() { document.querySelectorAll('.step-item').forEach((s, i) => { const area = s.querySelector('textarea'); if (area) area.placeholder = `第${i+1}步...`; }); }

    initRecipeManage() {
        this.renderRecipeManageList();
        const searchInput = document.getElementById('recipe-manage-search');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.renderRecipeManageList());
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { window.uiManager = new UIManager(); });

// 全局购物车函数
window.showCartGlobal = () => { if (window.uiManager) window.uiManager.showCart(); };

// 清除缓存并刷新数据（可在控制台调用）
window.clearRecipeCache = () => {
    localStorage.removeItem('recipes');
    localStorage.removeItem('cookingLogs');
    localStorage.removeItem('cart');
    localStorage.removeItem('orders');
    localStorage.removeItem('appState');
    location.reload();
};