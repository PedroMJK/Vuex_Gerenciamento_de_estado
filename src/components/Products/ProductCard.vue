<!--  Componente para exibir apenas um produto -->
  <template>
    <div class="card">
       
            {{ product.name}} - {{ product.price }} <br>
            <button  @click="addToCart()">
                Adicionar
            </button>
        
            <button  @click="removeFromCart()">
                Remover
            </button>
        
    </div>
  </template>

  <script>
    export default {
        props: {
            product: Object
        },

        methods:  {
            addToCart() {
               this.$store.commit('addToCart', this.product) 
            },
            removeFromCart() {
               this.$store.commit('removeFromCart', this.product.id) 
            }
        }
    }
  </script>

  <style>

     body{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        background-color: rgb(128, 203, 226);
        padding: 5px;
        margin-bottom: 10px;
        width: 220px;
        height: 120px;
        border-radius: 20px;
        border: 3px solid rgb(174, 152, 10);
    }
  </style>
