import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-10, 10, 100)
y = x**2

plt.figure()
plt.plot(x, y, label='y = x²', color='blue')
plt.title('Line Plot: y = x²')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.legend()

# Save in multiple formats
plt.savefig('line_plot.png')
plt.savefig('line_plot.pdf')
plt.savefig('line_plot.svg')
plt.close()
