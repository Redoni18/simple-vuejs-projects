var eventBus = new Vue();


Vue.component('product', {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                    <p><small>{{description}}</small></p>
                    <p v-if="inStock">In stock</p>
                    <p v-bind:class="{lineThrough: !inStock}"v-else>Out of stock</p>
                    
                    <p><span>{{sale}}</span></p>
                    <a :href="link" target="_blank">learn more, very nice, learn time</a>
                    
                    <info-tabs :shipping="shipping" :details="details"></info-tabs>

                    <div class="color-box"
                        v-for="(variant, index) in variants" 
                        v-bind:key="variant.variantId"
                        v-bind:style="{backgroundColor: variant.variantColor}"
                        @mouseover="updateProduct(index)">
                    </div>

                    <p>Sizes: </p>
                    <ul>
                        <li v-for="size in sizes">{{size}}</li>
                    </ul>

                    <button v-on:click="addToCart"
                            v-bind:disabled="!inStock"
                            v-bind:class="{disabledButton: !inStock}">
                            Add to cart
                    </button>

                    <button v-bind:style="{backgroundColor: '#ed4340'}" 
                            @click="removeFromCart">
                            Remove from cart
                    </button>
            </div>

            <product-tabs v-bind:reviews="reviews"></product-tabs>
        </div>
    `,
    data: function(){
        return {
            brand: 'vue mastery',
            product: 'socks',
            description: 'very nice comfee feet',
            selectedVariant: 0,
            link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            onSale: true,
            details: ["80% cotton", "10% polyester", "10% sweat"],
            variants: [
                {
                    variantId: 1,
                    variantColor: "green",
                    variantImage: "./foto/green-socks.jpg",
                    variantQuantity: 10,
                    variableVariantQuantity: 10
                },
                {
                    variantId: 2,
                    variantColor: "blue",
                    variantImage: "./foto/blue-socks.jpg",
                    variantQuantity: 10,
                    variableVariantQuantity: 10
                }
            ],
            sizes: ["Small", "Medium", "Large","Extra Large","XXL"],
            reviews: []
        }
    },
    methods:{
        addToCart: function(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
            //this.variants[this.selectedVariant].variableVariantQuantity -= 1
            //this.show = true;
            //this.inventory -= 1;
        },
        updateProduct: function(index){
            this.selectedVariant = index;
            // if(this.variants[this.selectedVariant].variableVariantQuantity != this.quantityData()){
            //     this.show = true;
            // }

            // if(this.quantityData() == this.variants[this.selectedVariant].variableVariantQuantity){
            //     this.show = false;
            // }
        },
        // quantityData: function(){
        //     let originalValue = this.variants[this.selectedVariant].variantQuantity
        //     return originalValue
        //     console.log(originalValue)
        // },
        removeFromCart: function(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
            // this.cart -= 1;
            // this.variants[this.selectedVariant].variableVariantQuantity += 1
            // console.log(this.quantityData())
            // console.log(this.variants[this.selectedVariant].variableVariantQuantity)
            // if(this.variants[this.selectedVariant].variableVariantQuantity == this.quantityData()){
            //     this.show = false;
            // }
            //this.inventory += 1;
        }
    },
    computed:{
        title: function(){
            return this.brand + " " + this.product;
        },
        image: function(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock: function(){
            console.log(this.variants[this.selectedVariant].variantQuantity)
            return this.variants[this.selectedVariant].variableVariantQuantity
        },
        sale: function(){
            if(this.onSale){
                return this.brand + " " + this.product + " are on sale";
            }

            return this.brand + " " + this.product + " are not on sale";
        },
        shipping: function(){
            if(this.premium){
                return "Free";
            }
            return "€2";
        }
    },
    mounted(){
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview);
        })
    }
})


Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
        
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{error}}</li>
            </ul>
        </p>

        <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        </p>
        
        <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        </p>

        <p>Would you recommend this product?</p>
        <label>
          Yes
          <input type="radio" value="Yes" v-model="recommend"/>
        </label>
        <label>
          No
          <input type="radio" value="No" v-model="recommend"/>
        </label>
            
        <p>
        <input type="submit" value="Submit">  
        </p>    
    
    </form>
    `,
    data: function(){
        return{
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: []
        }
    },
    methods: {
        onSubmit: function(){
            if(this.name && this.review && this.rating && this.recommend){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
                this.recommend = null
            }else{
                if(!this.name){
                    this.errors.push("Name required.")
                }
                if(!this.review){
                    this.errors.push("Review required.")
                }
                if(!this.rating){
                    this.errors.push("Rating required.")
                }
                if(!this.recommend){
                    this.errors.push("Recommendation required.")
                }
            }
        }
    }
})

Vue.component('product-tabs', {
    props:{
        reviews:{
            type: Array,
            required: true
        }
    },
    template:  `
        <div>
            <ul>
                <span class="tab" 
                    :class="{ activeTab: selectedTab === tab }"
                    v-for="(tab, index) in tabs"
                    @click="selectedTab = tab"
                    :key="tab"
                >{{ tab }}</span>
            </ul>

            <div v-show="selectedTab === 'Reviews'">
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="(review, index) in reviews" :key="index">
                        <p>{{ review.name }}: {{review.review}} | Rating: {{review.rating}} | User recommended: {{review.recommend}}</p>
                    </li>
                </ul>
            </div>

            <product-review v-show="selectedTab === 'Add a Review'"></product-review>
        </div>
    `,
    data: function(){
        return {
            tabs: ['Reviews', 'Add a Review'],
            selectedTab: 'Reviews'
        }
    }
})

Vue.component('info-tabs', {
    props: {
        shipping: {
            required: true
        },
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <ul>
            <span class="tab" 
                    :class="{ activeTab: selectedTab === tab }"
                    v-for="(tab, index) in tabs"
                    @click="selectedTab = tab"
                    :key="tab"
            >{{ tab }}</span>
            </ul>

            <div v-show="selectedTab === 'Shipping'">
                <p>{{ shipping }}</p>
            </div>

            <div v-show="selectedTab === 'Details'">
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
            </div>
        </div>
    `,
    data: function(){
        return{
            tabs: ["Shipping", "Details"],
            selectedTab: "Shipping"
        }
    }
})

var app = new Vue({
    el:'#app',
    data:{
        premium: true,
        cart: [],
    },
    methods: {
        updateCart: function(id){
            this.cart.push(id);
        },
        removeItemFromCart: function(id) {
            for(let i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})