<template>
	<div class="demo3">
		<fieldset>
          <legend>
            Create New Person
          </legend>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="newPerson.name"/>
          </div>
          <div class="form-group">
            <label>Age:</label>
            <input type="text" v-model="newPerson.age"/>
          </div>
          <div class="form-group">
            <label>Sex:</label>
            <select v-model="newPerson.sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>
          <div class="form-group">
            <label></label>
            <button @click="createPerson">Create</button>
          </div>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.sex }}</td>
            <td :class="'text-center'"><button @click="deletePerson(index)">Delete</button></td>
          </tr>
        </tbody>
      </table>
	</div>
</template>

<script>
export default {
  name: 'demo3',
  data () {
    return {
      // person对象
	    newPerson: {
        name: '',
        age: 0,
        sex: 'Male'
      },
      // people列表
      people: [{
        name: 'Jack',
        age: 30,
        sex: 'Male'
      }, {
        name: 'Bill',
        age: 26,
        sex: 'Male'
      }, {
        name: 'Tracy',
        age: 22,
        sex: 'Female'
      }, {
        name: 'Chris',
        age: 36,
        sex: 'Male'
      }]
    }
  },
  methods: {
    createPerson() {
      // debugger;
      this.people.push(this.newPerson);
      // 添加完newPerson对象后，重置newPerson对象
      // debugger; 
      this.newPerson = {name: '', age: 0, sex: 'Male'};
    },
    deletePerson(index) {
      // 删一个数组元素
      this.people.splice(index, 1);
    }
  }
}
</script>

<style type="text/less" lang="less" scoped>
html {
  font-size: 12px;
  font-family: Ubuntu, simHei, sans-serif;
  font-weight: 400
}

body {
  font-size: 1rem
}

table,
td,
th {
  border-collapse: collapse;
  border-spacing: 0
}
.demo3 {
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: 30px;
}
table {
  width: 100%
}

td,
th {
  border: 1px solid #bcbcbc;
  padding: 5px 10px
}

th {
  background: #42b983;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer
}

tr:nth-of-type(odd) {
  background: #fff
}

tr:nth-of-type(even) {
  background: #eee
}

fieldset {
  border: 1px solid #BCBCBC;
  padding: 15px;
}

input {
  outline: none
}

input[type=text] {
  border: 1px solid #ccc;
  padding: .5rem .3rem;
}
input[type=text]:focus {
  border-color: #42b983;
}

button {
  outline: none;
  padding: 5px 8px;
  color: #fff;
  border: 1px solid #BCBCBC;
  border-radius: 3px;
  background-color: #009A61;
  cursor: pointer;
}
button:hover{
  opacity: 0.8;
}

.form-group {
  margin: 10px;
}

.form-group > label {
  display: inline-block;
  width: 10rem;
  text-align: right;
}

.form-group > input,
.form-group > select {
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
}

.text-center{
  text-align: center;
}
</style>