const byteSize = (str) => {
  // write your code herefunction byteSize(str) {
            return new Blob([str]).size;
        }

        function calculate() {
            const input = document.getElementById('inputText').value;
            const byteLength = byteSize(input);
            const charLength = input.length;
            
            document.getElementById('output').innerHTML = 
                `• Characters: ${charLength}<br>` +
                `• Bytes (UTF-8): <strong>${byteLength}</strong>`;
            
            document.getElementById('result').style.display = 'block';
        }

        // Auto-calculate on input change
        document.getElementById('inputText').addEventListener('input', calculate);
        
        // Initial calculation
        calculate();
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
