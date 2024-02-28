import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
interface Card {
  showMore: boolean;
  longText: string;
  imageSrc: string; 
  altText: string;
}
@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatCardModule, NgFor,MatDialogModule],
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '400px' })), // Set the initial height
      state('expanded', style({ height: '*' })), // Auto height for expanded state
      transition('collapsed <=> expanded', animate('0.5s ease-in-out'))
    ])
  ]
})
export class BlogComponentComponent {
   constructor(public dialog: MatDialog){}
  cards: Card[] = [
    {
      showMore: false,
      longText: `Strawberries, vibrant and succulent, are nature's crimson jewels. With their luscious 
      sweetness and enticing aroma, these berries captivate taste buds worldwide. Bursting with vitamins, 
      antioxidants, and fiber, strawberries contribute not only to exquisite flavors but also to a healthy diet.
       Whether enjoyed fresh, atop desserts, or blended into refreshing smoothies, their versatility is unmatched. 
       From fields to farmers' markets, these heart-shaped delights symbolize the arrival of spring and the joys of harvest. 
       Beyond their delectable taste, strawberries embody the essence of summer, invoking nostalgia and delight in 
      every juicy bite—a testament to nature's bounty and the simple pleasures it provides.`, // Add your long text
      imageSrc: 'assets/pics/strawberries.jpg', // Add your image path
      altText: 'Photo of a Strawberry' // Add your alt text
    },
    {
      showMore: false,
      longText: `Orange is a vibrant and energetic color that sits between red and yellow on the visible spectrum. It is associated with warmth, enthusiasm, and creativity. In nature, oranges are commonly found in fruits like oranges, tangerines, and apricots, symbolizing freshness and vitality. The color is often used to evoke a sense of positivity and excitement. From sunsets painting the sky with hues of orange to autumn leaves falling gracefully, the color carries diverse cultural and emotional connotations. In art and design, orange is utilized to grab attention and convey a sense of dynamism, making it a versatile and impactful color.`, // Add your long text
      imageSrc: 'assets/pics/Orange-Kinnow.jpg', // Add your image path
      altText: 'Photo of Blueberries' // Add your alt text
    },
    {
      showMore: false,
      longText: `Cabbage, a cruciferous vegetable, is renowned for its versatility and nutritional benefits. With a firm texture and mild flavor, it serves as a staple in various cuisines globally. Packed with vitamins C and K, as well as fiber, it promotes immune health and aids digestion. Cabbage comes in different varieties, including green, red, and Savoy, each offering a unique taste and appearance. Often used in salads, coleslaw, stir-fries, or fermented forms like sauerkraut, cabbage adds a nutritious punch to meals. Its low-calorie content and rich nutrient profile make it a wholesome choice, contributing to a balanced and healthy diet.`, // Add your long text
      imageSrc: 'assets/pics/cab.jpg', // Add your image path
      altText: 'Photo of Blueberries' // Add your alt text
    },
    {
      showMore: false,
      longText: `Blueberries, scientifically known as Vaccinium corymbosum, are small, round, and vibrant blue berries with a sweet and tangy flavor. Packed with antioxidants, vitamins C and K, and fiber, blueberries are celebrated for their health benefits. These versatile berries are a delicious addition to various dishes, from breakfast cereals and smoothies to salads and desserts. Apart from their delightful taste, blueberries are recognized for their potential to improve cognitive function and promote heart health. As a low-calorie, nutrient-rich fruit, blueberries have become a popular choice in a balanced diet, contributing both flavor and nutritional value to meals.`, // Add your long text
      imageSrc: 'assets/pics/Blueberry.jpg', // Add your image path
      altText: 'Photo of Blueberries' // Add your alt text
    },
    {
      showMore: false,
      longText: `Cucumber is a widely-used open-source tool for behavior-driven development (BDD) that enhances collaboration between non-technical stakeholders and development teams. Primarily associated with testing, Cucumber employs the Gherkin language to express executable specifications in a human-readable format. It allows stakeholders to define features and scenarios, written in plain text, promoting a shared understanding of software behavior. Cucumber supports multiple programming languages and integrates seamlessly with various testing frameworks. Its modular structure aids in creating living documentation, fostering communication, and ensuring alignment between business requirements and application development in an agile environment.`, // Add your long text
      imageSrc: 'assets/pics/cucum.jpg', // Add your image path
      altText: 'Photo of Blueberries' // Add your alt text
    },
    {
      showMore: false,
      longText: `Green chili, a fiery and vibrant spice, adds a pungent kick to culinary creations worldwide. Harvested before ripening, these slender peppers boast a verdant hue and a robust flavor profile. Packed with capsaicin, the compound responsible for their heat, green chilies stimulate taste buds and elevate dishes. Beyond spiciness, they offer a rich source of vitamins A and C, promoting immunity and skin health. Embraced in diverse cuisines, from Asian curries to Mexican salsas, green chilies are a versatile ingredient that enhances the complexity and zest of countless recipes, making them a staple in kitchens globally.`, // Add your long text
      imageSrc: 'assets/pics/chilli.jpg', // Add your image path
      altText: 'Photo of Blueberries' // Add your alt text
    },
  ];

  toggleShowMore(card: Card) {
    card.showMore = !card.showMore;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '400px',
        height: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
}
}
